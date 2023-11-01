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
    const randomUUID = uuidv4();
    let newFileName = "./vouchers/" + randomUUID.toString() + ".pdf"
    let filename = genpdf.GenPdf(data, newFileName)

    filename.then((res) => {
        callback(null, {url: res});
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