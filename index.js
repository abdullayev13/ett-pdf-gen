const fs = require('fs');
var html2pdf = require("./html2pdf.js");
var makeHtml = require("./makeHtml.js");
var servicesData = require("./servicesData.js");

let data = {
  Issued: 'my_Issued',
  Code: 'my_Code',
  VisitDate: 'my_VisitDate',
  StayDuration: 'my_StayDuration',
  Guest: 'my_Guest',
  GuestName: 'my_GuestName',
  QrCodeLink:'https://legiit-service.s3.amazonaws.com/73f8891e6e95315ca9d3c3e6226c47a1/6173b646e3f627312285ce2cf48df413.png',

  Name: 'my_Name',
  Airport: 'my_Airport',
  Terminal: 'my_Terminal',
  City: 'my_City',
  Location: 'my_Location',
  OpenHours: 'my_OpenHours',
  PaymentServices: servicesData.getPaymentServices('Private resting area', 'VIP meet and Greets'),
  OtherServices: servicesData.getOtherServices('Meeting rooms', 'Wi-Fi', 'Playroom'),
}


let htmlContent = makeHtml.Make(data);
html2pdf.MakeIt(htmlContent, "custom.pdf");
















// let wfn = "vaucher"
// const fileName = wfn + '.html'; // Replace with the name of the file you want to read

// // Read the file as a string
// fs.readFile(fileName, 'utf8', (err, data) => {
//   if (err) {
//     console.error(`Error reading ${fileName}: ${err.message}`);
//   } else {
//     console.log(`Contents of ${fileName}:`);
//     // console.log(data);
//     logic(data);
//   }
// });


// const pdf = require('html-pdf');
// const { log } = require('console');

// function logic(htmlContent) {
//   //  'A3', 'A4', 'A5', 'Legal', 'Letter', 'Tabloid'
//   const options = {
//     width: '1000px',
//     height: '1500px',
//     margin: '0px'
//   }; // You can specify PDF options here

//   pdf.create(htmlContent, options).toFile('output.pdf', (err, res) => {
//     if (err) return console.error(err);
//     console.log(`PDF saved to ${res.filename}`);
//   });
// }


