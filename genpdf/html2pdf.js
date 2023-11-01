const pdf = require('html-pdf');

async function Convert(htmlContent, outFileName) {
    //  'A3', 'A4', 'A5', 'Legal', 'Letter', 'Tabloid'
    const options = {
        width: '1000px',
        height: '1300px',
        // width: '989px',
        // height: '1403px',

        margin: '0px',
    }; // You can specify PDF options here

    let pdfFile = pdf.create(htmlContent, options)

    let filename = await SavePdfFile(pdfFile, outFileName)

    return filename
}

function SavePdfFile(pdfFile, outFileName) {
    return new Promise((resolve, reject) => {
        pdfFile.toFile(outFileName, async (err, res) => {
            if (err) return console.error(err);
            console.log(`PDF saved to ${res.filename}`);
            resolve(res.filename)
        });
    });
}


module.exports = {Convert}
