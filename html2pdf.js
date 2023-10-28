
const pdf = require('html-pdf');

function MakeIt(htmlContent, outFileName) {
    //  'A3', 'A4', 'A5', 'Legal', 'Letter', 'Tabloid'
const options = {
  // width: '1000px',
  // height: '1300px',
  width: '989px',
  height: '1403px',
    margin: '0px'
  }; // You can specify PDF options here

pdf.create(htmlContent, options).toFile(outFileName, (err, res) => {
  if (err) return console.error(err);
  console.log(`PDF saved to ${res.filename}`);
});
}


module.exports = {MakeIt}
