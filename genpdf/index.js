module.exports = {GenPdf}

const makeHtml = require("../genhtml");
const html2pdf = require("./html2pdf");


function GenPdf(data, outFile) {
    if (!outFile)
        outFile = "custom.pdf"
    let htmlContent = makeHtml.GenHtml(data);
    let fileName = html2pdf.Convert(htmlContent, outFile);

    return fileName
}
