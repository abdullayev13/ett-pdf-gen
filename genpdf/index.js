module.exports = {GenPdf}

const makeHtml = require("../genhtml");
const html2pdf = require("./html2pdf");


function GenPdf(data, outFile) {

    // let data = {
    //     Issued: 'my_Issued',
    //     Code: 'my_Code',
    //     VisitDate: 'my_VisitDate',
    //     StayDuration: 'my_StayDuration',
    //     Guest: 'my_Guest',
    //     GuestName: 'my_GuestName',
    //     QrCodeSrc:'https://legiit-service.s3.amazonaws.com/73f8891e6e95315ca9d3c3e6226c47a1/6173b646e3f627312285ce2cf48df413.png',
    //
    //     Name: 'my_Name',
    //     Airport: 'my_Airport',
    //     Terminal: 'my_Terminal',
    //     City: 'my_City',
    //     Location: 'my_Location',
    //     OpenHours: 'my_OpenHours',
    //     PaymentServices: servicesData.getPaymentServices('Private resting area', 'Private resting area', 'VIP meet and Greets'),
    //     OtherServices: servicesData.getOtherServices('Meeting rooms', 'Wi-Fi',
    //         'Wi-Fi', 'Playroom',
    //         /*
    //               'Wi-Fi', 'Playroom','Meeting rooms', 'Wi-Fi', 'Playroom',
    //               'Wi-Fi', 'Playroom','Meeting rooms', 'Wi-Fi', 'Playroom',
    //               'Wi-Fi', 'Playroom','Meeting rooms', 'Wi-Fi', 'Playroom',
    //               'Wi-Fi', 'Playroom','Meeting rooms', 'Wi-Fi', 'Playroom',      'Wi-Fi', 'Playroom','Meeting rooms', 'Wi-Fi', 'Playroom',
    //               'Wi-Fi', 'Playroom','Meeting rooms', 'Wi-Fi', 'Playroom',
    //               'Wi-Fi', 'Playroom','Meeting rooms', 'Wi-Fi', 'Playroom',
    //               'Wi-Fi', 'Playroom','Meeting rooms', 'Wi-Fi', 'Playroom',      'Wi-Fi', 'Playroom','Meeting rooms', 'Wi-Fi', 'Playroom',
    //               'Wi-Fi', 'Playroom','Meeting rooms', 'Wi-Fi', 'Playroom',
    //               'Wi-Fi', 'Playroom','Meeting rooms', 'Wi-Fi', 'Playroom',
    //               'Wi-Fi', 'Playroom','Meeting rooms', 'Wi-Fi', 'Playroom',      'Wi-Fi', 'Playroom','Meeting rooms', 'Wi-Fi', 'Playroom',
    //               'Wi-Fi', 'Playroom','Meeting rooms', 'Wi-Fi', 'Playroom',
    //               'Wi-Fi', 'Playroom','Meeting rooms', 'Wi-Fi', 'Playroom',
    //               'Wi-Fi', 'Playroom','Meeting rooms', 'Wi-Fi', 'Playroom',      'Wi-Fi', 'Playroom','Meeting rooms', 'Wi-Fi', 'Playroom',
    //               'Wi-Fi', 'Playroom','Meeting rooms', 'Wi-Fi', 'Playroom',
    //               'Wi-Fi', 'Playroom','Meeting rooms', 'Wi-Fi', 'Playroom',
    //               'Wi-Fi', 'Playroom','Meeting rooms', 'Wi-Fi', 'Playroom',      'Wi-Fi', 'Playroom','Meeting rooms', 'Wi-Fi', 'Playroom',
    //               'Wi-Fi', 'Playroom','Meeting rooms', 'Wi-Fi', 'Playroom',
    //               'Wi-Fi', 'Playroom','Meeting rooms', 'Wi-Fi', 'Playroom',
    //               'Wi-Fi', 'Playroom','Meeting rooms', 'Wi-Fi', 'Playroom',      'Wi-Fi', 'Playroom','Meeting rooms', 'Wi-Fi', 'Playroom',
    //               'Wi-Fi', 'Playroom','Meeting rooms', 'Wi-Fi', 'Playroom',
    //               'Wi-Fi', 'Playroom','Meeting rooms', 'Wi-Fi', 'Playroom',
    //               'Wi-Fi', 'Playroom','Meeting rooms', 'Wi-Fi', 'Playroom',      'Wi-Fi', 'Playroom','Meeting rooms', 'Wi-Fi', 'Playroom',
    //               'Wi-Fi', 'Playroom','Meeting rooms', 'Wi-Fi', 'Playroom',
    //               'Wi-Fi', 'Playroom','Meeting rooms', 'Wi-Fi', 'Playroom',
    //               'Wi-Fi', 'Playroom','Meeting rooms', 'Wi-Fi', 'Playroom',      'Wi-Fi', 'Playroom','Meeting rooms', 'Wi-Fi', 'Playroom',
    //               'Wi-Fi', 'Playroom','Meeting rooms', 'Wi-Fi', 'Playroom',
    //               'Wi-Fi', 'Playroom','Meeting rooms', 'Wi-Fi', 'Playroom',
    //               'Wi-Fi', 'Playroom','Meeting rooms', 'Wi-Fi', 'Playroom',      'Wi-Fi', 'Playroom','Meeting rooms', 'Wi-Fi', 'Playroom',
    //               'Wi-Fi', 'Playroom','Meeting rooms', 'Wi-Fi', 'Playroom',
    //               'Wi-Fi', 'Playroom','Meeting rooms', 'Wi-Fi', 'Playroom',
    //               'Wi-Fi', 'Playroom','Meeting rooms', 'Wi-Fi', 'Playroom',      'Wi-Fi', 'Playroom','Meeting rooms', 'Wi-Fi', 'Playroom',
    //               'Wi-Fi', 'Playroom','Meeting rooms', 'Wi-Fi', 'Playroom',
    //               'Wi-Fi', 'Playroom','Meeting rooms', 'Wi-Fi', 'Playroom',
    //               'Wi-Fi', 'Playroom','Meeting rooms', 'Wi-Fi', 'Playroom',      'Wi-Fi', 'Playroom','Meeting rooms', 'Wi-Fi', 'Playroom',
    //               'Wi-Fi', 'Playroom','Meeting rooms', 'Wi-Fi', 'Playroom',
    //               'Wi-Fi', 'Playroom','Meeting rooms', 'Wi-Fi', 'Playroom',
    //               'Wi-Fi', 'Playroom','Meeting rooms', 'Wi-Fi', 'Playroom',      'Wi-Fi', 'Playroom','Meeting rooms', 'Wi-Fi', 'Playroom',
    //               'Wi-Fi', 'Playroom','Meeting rooms', 'Wi-Fi', 'Playroom',
    //               'Wi-Fi', 'Playroom','Meeting rooms', 'Wi-Fi', 'Playroom',
    //               'Wi-Fi', 'Playroom','Meeting rooms', 'Wi-Fi', 'Playroom',      'Wi-Fi', 'Playroom','Meeting rooms', 'Wi-Fi', 'Playroom',
    //               'Wi-Fi', 'Playroom','Meeting rooms', 'Wi-Fi', 'Playroom',
    //               'Wi-Fi', 'Playroom','Meeting rooms', 'Wi-Fi', 'Playroom',
    //               'Wi-Fi', 'Playroom','Meeting rooms', 'Wi-Fi', 'Playroom',      'Wi-Fi', 'Playroom','Meeting rooms', 'Wi-Fi', 'Playroom',
    //               'Wi-Fi', 'Playroom','Meeting rooms', 'Wi-Fi', 'Playroom',
    //               'Wi-Fi', 'Playroom','Meeting rooms', 'Wi-Fi', 'Playroom',
    //               'Wi-Fi', 'Playroom','Meeting rooms', 'Wi-Fi', 'Playroom',
    //         */
    //         'Wi-Fi'),
    // }

    if (!outFile)
        outFile = "custom.pdf"
    let htmlContent = makeHtml.GenHtml(data);
    let fileName = html2pdf.Convert(htmlContent, outFile);

    return fileName
}
