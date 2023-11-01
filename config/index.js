const HttpPort = 3000
const GrpcPort = 122
const Domain = `localhost:${HttpPort}`
const VouchersFilePath = __dirname + '/../vouchers'

module.exports = {
    HttpPort,
    GrpcPort,
    Domain,
    VouchersFilePath,
}
