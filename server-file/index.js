const express = require('express');
const config = require('./../config');

const app = express();
const port = config.HttpPort;

// Serve static files (uploaded files)
app.use('/vouchers', express.static('vouchers'));

// Set up a route to download files
app.get('/download-voucher/:filename', (req, res) => {
    const filename = req.params.filename;
    res.download(config.VouchersFilePath + `/${filename}`);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
