const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const parseArgs = require('minimist');
const genpdf = require('./../genpdf');
const {v4: uuidv4} = require('uuid');
const config = require('./../config');


const PROTO_PATH = __dirname + '/../protos/voucher.proto';
const GrpcPort = config.GrpcPort;

const packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    });
const voucherProto = grpc.loadPackageDefinition(packageDefinition).voucher;

let client;

function GeneratePdf(call, callback) {
    const data = call.request.Data;
    const newFileName = uuidv4().toString() + ".pdf"
    let newFilePath = config.VouchersFilePath + '/' + newFileName

    let filename = genpdf.GenPdf(data, newFilePath)

    filename.then((res) => {
        var url = `${config.Domain}/download-voucher/${newFileName}`

        if (!config.DevMode)
            res = ''

        callback(null, {url, path: res});
    })
}

const serviceImplementation = {
    GeneratePdf
}

function Run() {
    const argv = parseArgs(process.argv.slice(2), {
        string: 'port',
        default: {port: GrpcPort}
    });
    const server = new grpc.Server();
    server.addService(voucherProto.Voucher.service, serviceImplementation);
    server.bindAsync(`0.0.0.0:${argv.port}`, grpc.ServerCredentials.createInsecure(), () => {
        server.start();
    });
    client = new voucherProto.Voucher(`localhost:${argv.port}`, grpc.credentials.createInsecure());
}

module.exports = {Run}