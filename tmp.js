var fs = require('fs')
var conversion = require("phantom-html-to-pdf")();

conversion({ html: "<h1>Hello World</h1>" }, function(err, pdf) {
    var output = fs.createWriteStream('custom0.pdf')
    console.log(pdf.logs);
    console.log(pdf.numberOfPages);
    pdf.stream.pipe(output);
});
