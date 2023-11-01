const HttpPort = 3000
const GrpcPort = 122
const Domain = `localhost:${HttpPort}`
const VouchersFilePath = __dirname + '/../vouchers'
const DevMode = true

module.exports = {
    HttpPort,
    GrpcPort,
    Domain,
    VouchersFilePath,
    DevMode,
}
