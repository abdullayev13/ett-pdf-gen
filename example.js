const genpdf = require("./genpdf");


genpdf.GenPdf({
    EttLogoSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/1200px-Go_Logo_Blue.svg.png',
    CustomerLogoSrc: 'https://w7.pngwing.com/pngs/416/280/png-transparent-node-js-express-js-javascript-redis-mean-node-js-angle-text-service.png',
    QrCodeSrc: 'https://www-static-nw.husqvarna.com/-/images/aprimo/husqvarna/robotic-mowers/photos/bar-code-qr-code/dw-265854.png?format=PNG_SQUARE_CONTAIN_XXL&v=1cbd652d',

    Issued: 'my_Issued',
    Code: 'my_Code',
    VisitDate: 'my_VisitDate',
    StayDuration: 'my_StayDuration',
    Guest: 'my_Guest',
    GuestName: 'my_GuestName',

    Name: 'my_Name',
    Airport: 'my_Airport',
    Terminal: 'my_Terminal',
    City: 'my_City',
    Location: 'my_Location',
    OpenHours: 'my_OpenHours',

    AvailableServices: [
        {
            Name: 'Wi-Fi',
            IconClass: 'fa-solid fa-wifi'
        },
    ],
    PaymentServices: [
        {
            Name: 'Bed',
            IconClass: 'fa-solid fa-bed'
        },
    ],
})
