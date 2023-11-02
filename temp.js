const html2pdf = require("./genpdf/html2pdf");


let outFile = "custom.pdf"
let fileName = html2pdf.Convert(htmlContent(), outFile);
console.log(fileName)

function htmlContent() {
    return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100&family=Montserrat:wght@400;500;700&display=swap"
    rel="stylesheet">
  <title>Document</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.2/jspdf.min.js"></script>
  <script></script>
</head>

<body>
  <div class="wrapper">
    <div class="main">
      <div class="header">
        <div class="header__top">
          <div class="header__logo">
            <img src="${data.EttLogoSrc}" alt="ett-logo">
          </div>
          <div class="header__partner">
            <img src="${data.CustomerLogoSrc}" alt="ett-logo">
          </div>
        </div>
        <div class="header__bottom bottom">
          <div class="bottom__date text-xs-light-grey">
            Issued ${data.Issued}
          </div>
          <div class="bottom__code text-sm-bold">
            <span>${data.Code}</span>
          </div>
        </div>
      </div>
      <div class="guest">
        <div class="guest__main">
          <div class="guest__data">
            <div class="guest__logo">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.938721" y="0.685303" width="26.6603" height="26.6603" rx="13.3302" fill="#0082FF" />
                <circle cx="11.5607" cy="8.26737" r="2.16666" fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M15.7726 14.9073C16.1075 15.7645 15.332 16.5359 14.4117 16.5359H8.78896C7.86865 16.5359 7.09316 15.7645 7.42809 14.9073C8.07964 13.2397 9.70205 12.0585 11.6003 12.0585C13.4986 12.0585 15.1211 13.2397 15.7726 14.9073Z"
                  fill="white" />
                <path
                  d="M15.1746 13.6527C16.9634 13.6527 18.4134 12.2026 18.4134 10.4138C18.4134 8.62507 16.9634 7.17499 15.1746 7.17499C13.3858 7.17499 11.9357 8.62507 11.9357 10.4138C11.9357 12.2026 13.3858 13.6527 15.1746 13.6527Z"
                  fill="white" stroke="#0082FF" stroke-width="0.833135" />
                <mask id="path-5-outside-1_202_416" maskUnits="userSpaceOnUse" x="9.00903" y="13.6071" width="13"
                  height="8" fill="black">
                  <rect fill="white" x="9.00903" y="13.6071" width="13" height="8" />
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M10.3198 17.2845C9.32273 18.8317 10.8858 20.4391 12.7264 20.4391H17.726C19.5667 20.4391 21.1297 18.8317 20.1327 17.2845C19.0946 15.6737 17.285 14.6071 15.2262 14.6071C13.1675 14.6071 11.3579 15.6737 10.3198 17.2845Z" />
                </mask>
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M10.3198 17.2845C9.32273 18.8317 10.8858 20.4391 12.7264 20.4391H17.726C19.5667 20.4391 21.1297 18.8317 20.1327 17.2845C19.0946 15.6737 17.285 14.6071 15.2262 14.6071C13.1675 14.6071 11.3579 15.6737 10.3198 17.2845Z"
                  fill="white" />
                <path
                  d="M20.1327 17.2845L19.4324 17.7358L20.1327 17.2845ZM12.7264 21.2722H17.726V19.6059H12.7264V21.2722ZM15.2262 15.4402C16.9901 15.4402 18.5412 16.3529 19.4324 17.7358L20.833 16.8331C19.648 14.9944 17.5799 13.7739 15.2262 13.7739V15.4402ZM11.0201 17.7358C11.9113 16.3529 13.4624 15.4402 15.2262 15.4402V13.7739C12.8726 13.7739 10.8044 14.9944 9.6195 16.8331L11.0201 17.7358ZM17.726 21.2722C18.8733 21.2722 19.9664 20.7756 20.6335 19.9754C21.3324 19.137 21.5534 17.9511 20.833 16.8331L19.4324 17.7358C19.709 18.165 19.647 18.5565 19.3536 18.9085C19.0282 19.2988 18.4194 19.6059 17.726 19.6059V21.2722ZM12.7264 19.6059C12.033 19.6059 11.4243 19.2988 11.0989 18.9085C10.8055 18.5565 10.7435 18.165 11.0201 17.7358L9.6195 16.8331C8.89904 17.9511 9.12006 19.137 9.81902 19.9754C10.4861 20.7756 11.5792 21.2722 12.7264 21.2722V19.6059Z"
                  fill="#0082FF" mask="url(#path-5-outside-1_202_416)" />
              </svg>

              <span class="text-sm-bold-blue">Guest</span>
            </div>
            <ul class="guest__info">
              <li class="guest__item">
                <div class="guest__label text-sm-grey">Visit date</div>
                <b class="guest__value text-sm-bold">${data.VisitDate}</b>
              </li>
              <li class="guest__item">
                <div class="guest__label text-sm-grey">Stay duration</div>
                <b class="guest__value text-sm-bold">${data.StayDuration}</b>
              </li>
              <li class="guest__item">
                <div class="guest__label text-sm-grey">Guest</div>
                <b class="guest__value text-sm-bold">${data.Guest}</b>
              </li>
              <li class="guest__item">
                <div class="guest__label text-sm-grey">Guest NAME</div>
                <b class="guest__value text-sm-bold">${data.GuestName}</b>
              </li>
            </ul>
          </div>
          <div class="guest__qr">
            <div class="border">
              <img src="${data.QrCodeSrc}" alt="qr">
            </div>
          </div>
        </div>
        

        <div class="guest__footer text-xxs-light-grey">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.93431 13.9512C6.93431 10.2689 9.9188 7.28387 13.6003 7.28387C9.91996 7.28387 6.9362 4.30071 6.93431 0.620077C6.93242 4.3004 3.94919 7.28335 0.269249 7.28387C3.95035 7.28439 6.93431 10.2692 6.93431 13.9512Z"
              fill="#9E9B98" />
          </svg>

          <p>
            Children under 2 years old are admitted free with an adult
          </p>
        </div>
      </div>
      <div class="lounge">
        <div class="lounge__logo">
          <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.938721" y="0.269531" width="26.6603" height="26.6603" rx="13.3302" fill="#0082FF" />
            <path
              d="M19.1141 13.0903H9.71006C8.90766 13.0903 8.25488 13.7431 8.25488 14.5455V15.1393C8.25488 15.9417 8.90766 16.5945 9.71006 16.5945L19.1141 16.5944C19.9165 16.5944 20.5692 15.9416 20.5692 15.1392V14.5454C20.5692 13.7431 19.9165 13.0903 19.1141 13.0903Z"
              fill="white" />
            <path
              d="M20.2418 10.5372C19.243 10.5372 18.4304 11.3498 18.4304 12.3486C18.4304 12.3775 18.4327 12.4053 18.4348 12.4333L18.4426 12.557H19.1138C19.951 12.557 20.7035 13.0895 20.9865 13.8822L21.022 13.9816L21.1142 13.9304C21.6933 13.6098 22.0532 13.0037 22.0532 12.3486C22.0532 11.3497 21.2406 10.5372 20.2418 10.5372L20.2418 10.5372Z"
              fill="white" />
            <path
              d="M9.71024 12.5571H10.3814L10.3892 12.4334C10.3915 12.4053 10.3936 12.3775 10.3936 12.3487C10.3936 11.3499 9.58101 10.5374 8.58223 10.5374C7.58334 10.5374 6.77075 11.3498 6.77075 12.3487C6.77075 13.0039 7.1306 13.6099 7.70997 13.9305L7.80213 13.9817L7.83766 13.8823C8.12064 13.0896 8.87307 12.5571 9.71028 12.5571L9.71024 12.5571Z"
              fill="white" />
            <path
              d="M10.9268 12.349C10.9268 12.3734 10.9248 12.3969 10.9229 12.4207L10.9141 12.5574H17.9104L17.9015 12.4207C17.8996 12.3969 17.8976 12.3734 17.8976 12.349C17.8976 11.3895 18.4741 10.5366 19.3663 10.1758L19.4223 10.1531V9.518C19.4223 8.09361 18.2635 6.93469 16.839 6.93469H11.9854C10.561 6.93469 9.4021 8.09352 9.4021 9.518V10.1531L9.45813 10.1758C10.3506 10.5366 10.9268 11.3895 10.9268 12.349H10.9268Z"
              fill="white" />
            <path
              d="M19.7714 17.009H9.23934C8.76589 17.009 8.37842 17.3964 8.37842 17.87C8.37842 18.3436 8.76574 18.7309 9.23934 18.7309H9.76952V19.4922C9.76952 19.689 9.92896 19.8485 10.1258 19.8485C10.3227 19.8485 10.4821 19.689 10.4821 19.4922V18.7309H18.4018V19.4922C18.4018 19.689 18.5612 19.8485 18.7581 19.8485C18.955 19.8485 19.1144 19.689 19.1144 19.4922V18.7309H19.7717C20.2451 18.7309 20.6326 18.3436 20.6326 17.87C20.6324 17.3964 20.2449 17.009 19.7715 17.009H19.7714Z"
              fill="white" />
          </svg>

          <span class="text-sm-bold-blue">Lounge</span>
        </div>
        <ul class="lounge__info">
          <li class="lounge__item">
            <div class="lounge__label text-sm-grey">Name</div>
            <b class="lounge__value text-sm-bold">${data.Name}</b>
          </li>
          <li class="lounge__item">
            <div class="lounge__label text-sm-grey">Airport</div>
            <b class="lounge__value text-sm-bold">${data.Airport}</b>
          </li>
          <li class="lounge__item">
            <div class="lounge__label text-sm-grey">Terminal</div>
            <b class="lounge__value text-sm-bold">${data.Terminal}</b>
          </li>
          <li class="lounge__item">
            <div class="lounge__label text-sm-grey">City</div>
            <b class="lounge__value text-sm-bold">${data.City}</b>
          </li>
          <li class="lounge__item">
            <div class="lounge__label text-sm-grey">LOCATION</div>
            <b class="lounge__value text-sm-bold">${data.Location}</b>
          </li>
          <li class="lounge__item">
            <div class="lounge__label text-sm-grey">open hours</div>
            <b class="lounge__value text-sm-bold">${data.OpenHours}</b>
          </li>
        </ul>
        <div class="lounge__footer text-xxs-light-grey">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.93431 13.9512C6.93431 10.2689 9.9188 7.28387 13.6003 7.28387C9.91996 7.28387 6.9362 4.30071 6.93431 0.620077C6.93242 4.3004 3.94919 7.28335 0.269249 7.28387C3.95035 7.28439 6.93431 10.2692 6.93431 13.9512Z"
              fill="#9E9B98" />
          </svg>
          <p>
            Guests should ensure that lounge location corresponds to the specific airport or terminal area from which
            their flight is scheduled to depart/arrive and they have all required travel documents to pass airport
            controlled zones (immigration and customs procedures, security etc).
          </p>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="services">
        <div class="services__title">
          <div class="logo">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.938721" y="0.807617" width="26.6603" height="26.6603" rx="13.3302" fill="white" />
              <path
                d="M14.2681 16.9398C13.5297 15.829 12.5751 14.8742 11.4643 14.1357C12.5751 13.3972 13.5297 12.4424 14.2681 11.3315C15.0066 12.4424 15.9612 13.3972 17.072 14.1357C15.9612 14.8742 15.0066 15.829 14.2681 16.9398Z"
                fill="#0082FF" stroke="#0082FF" stroke-width="3.33254" />
            </svg>
          </div>
          <span class="text-xs-light-white">Available services</span>
        </div>
        <ul class="services__items">

          ${servicesHtml(data.AvailableServices)}
          
        </ul>
        <div class="services__title">
          <div class="logo">
            <svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.65205 15.7469V0.750488H6.11861V15.7469H4.65205ZM5.20648 13.992C4.22877 13.992 3.2928 13.8697 2.39856 13.6251C1.50432 13.3698 0.794886 13.0454 0.270264 12.6519L1.07508 11.0406C1.57586 11.3916 2.19586 11.6841 2.9351 11.918C3.67434 12.152 4.43147 12.269 5.20648 12.269C5.86226 12.269 6.39284 12.2052 6.79823 12.0776C7.20362 11.95 7.5017 11.7798 7.69247 11.5671C7.88324 11.3437 7.97863 11.0938 7.97863 10.8172C7.97863 10.4769 7.84151 10.2057 7.56728 10.0036C7.29304 9.79089 6.93535 9.62604 6.49419 9.50905C6.06495 9.38142 5.58206 9.26442 5.04552 9.15807C4.52089 9.05171 3.99031 8.9294 3.45377 8.79113C2.92914 8.64223 2.44625 8.4561 2.00509 8.23275C1.57586 7.99877 1.22412 7.69033 0.949888 7.30744C0.675653 6.92455 0.538536 6.43531 0.538536 5.8397C0.538536 5.23347 0.717385 4.68041 1.07508 4.18052C1.4447 3.67001 1.99913 3.26585 2.73837 2.96805C3.48953 2.65961 4.43743 2.50539 5.58206 2.50539C6.33322 2.50539 7.07843 2.59048 7.81767 2.76065C8.55691 2.93082 9.20076 3.17544 9.74923 3.49452L9.01595 5.10584C8.45556 4.80803 7.87728 4.59 7.28112 4.45174C6.68496 4.30284 6.11264 4.22839 5.56418 4.22839C4.92032 4.22839 4.3957 4.29752 3.99031 4.43578C3.59684 4.57405 3.30472 4.75486 3.11395 4.97821C2.9351 5.20156 2.84568 5.45682 2.84568 5.74398C2.84568 6.08433 2.97684 6.36086 3.23915 6.57357C3.51338 6.77565 3.86512 6.93519 4.29435 7.05218C4.73551 7.16918 5.22436 7.28617 5.76091 7.40316C6.29745 7.50952 6.82804 7.63183 7.35266 7.7701C7.8892 7.90836 8.3721 8.08917 8.80133 8.31252C9.24249 8.53587 9.59423 8.83899 9.85654 9.22188C10.1308 9.60477 10.2679 10.0887 10.2679 10.6737C10.2679 11.2693 10.0831 11.8223 9.71346 12.3328C9.35576 12.8327 8.80133 13.2369 8.05017 13.5453C7.29901 13.8431 6.35111 13.992 5.20648 13.992Z"
                fill="#0082FF" />
            </svg>
          </div>
          <span class="text-xs-light-white">Payment services</span>
        </div>
        <ul class="services__items">
          
          ${servicesHtml(data.PaymentServices)}

        </ul>
      </div>
    </div>
  </div>
</body>
<script>
  // Import the necessary components and hooks
  const { InlineSVGProvider, InlineSVG } = ReactInlineSVG;

  // Your icon mapping object
  const iconMapping = {
    home: '/path/to/home.svg',
    user: '/path/to/user.svg',
    settings: '/path/to/settings.svg',
    // Add more icons as needed
  };

  // Function to render the icon
  function renderIcon(iconName) {
    const iconSrc = iconMapping[iconName];
    if (!iconSrc) {
        // wAbdulayev
      return;
    }

    const iconElement = (
      <InlineSVG src={iconSrc} key={iconSrc} />
    );

    ReactDOM.render(iconElement, document.getElementById('icon-container'));
  }
</script>

<style>
  * {
    padding: 0;
    margin: 0;
    border: 0;
  }

  *,
  *:before,
  *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  :focus,
  :active {
    outline: none;
  }

  a:focus,
  a:active {
    outline: none;
  }

  nav,
  footer,
  header,
  aside {
    display: block;
  }

  html,
  body {
    height: 100%;
    width: 100%;
    font-size: 100%;
    line-height: 1;
    font-size: 14px;
    -ms-text-size-adjusst: 100%;
    -moz-text-size-adjusst: 100%;
    -webkit-text-size-adjust: 100%;
  }

  input,
  button,
  textarea {
    font-family: inherit;
  }

  input:-ms-clear {
    display: none;
  }

  button {
    cursor: pointer;
  }

  button:-moz-focus-innesr {
    padding: 0;
    border: 0;
  }

  a,
  a:visited {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  ul li {
    list-style: none;
  }

  img {
    vertical-align: top;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: 400;
  }

  * {
    font-family: 'Inter', sans-serif;
    font-family: 'Montserrat', sans-serif;
  }

  .text-xxs-light-grey {
    color: #9E9B98;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .text-xs-light-grey {
    color: #BFBFBF;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .text-xs-light-white {
    color: white;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .text-sm-bold-white {
    color: white;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .text-sm-grey {
    color: #9E9B98;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .text-sm-bold-blue {
    color: #0082FF;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .text-sm-bold {
    color: #141414;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .wrapper {
    width: 992px;
    height: 1403px;
    overflow: hidden;
    background: #0082FF;
    padding-left: 22px;
  }

  .container {
    /* max-width: 570px;
    margin: 0 auto; */
  }

  .header {
    background: white;
    padding-bottom: 10px;
    padding: 30px 0 24px;
  }

  .header__top {
    display: -webkit-box;
    -webkit-box-pack: justify;
    margin-bottom: 16px;
  }


  .header__top>* {
    width: 365px;
    height: 70px;
  }

  .header__top>* img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }


  .header__logo {}

  .header__partner {}

  .header__bottom {
    display: -webkit-box;
    -webkit-box-pack: justify;
    -webkit-box-align: center;

  }

  .bottom {}

  .bottom__date {}

  .bottom__code {
    display: -webkit-box;
    -webkit-box-align: center;
  }

  .bottom__code span {
    color: #141414;
  }

  .main {
    background: white;
    padding: 0 25px 24px;
    border-radius: 0 0 0 94px;
  }

  .guest {
    border-bottom: 1px dashed #0082FF;
    margin-bottom: 43px;

  }

  .guest__main {
    display: -webkit-box;
    -webkit-box-pack: justify;
  }

  .guest__data {}


  .guest__qr {
    flex-grow: 1;
  }

  .guest__qr .border {
    height: 163px;
    width: 163px;
    border: 1px solid #0082FF;
    border-radius: 28px;
    display: -webkit-box;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    padding: 10px;
    overflow: hidden;
  }

  .guest__qr img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }


  .guest__logo {
    display: -webkit-box;
    -webkit-box-align: center;
    margin-bottom: 26px;
  }


  .guest__logo>* {
    vertical-align: middle;
  }

  .guest__logo>*:first-child {
    margin-right: 8px;
  }

  .guest__info>*:not(:last-child) {
    margin-bottom: 19px;
  }

  .guest__info {
    margin-bottom: 19px;
  }

  .guest__item {
    display: -webkit-box;
    -webkit-box-align: start;
  }

  .guest__label {
    width: 200px;
    margin-right: 98px;
    text-transform: uppercase;
  }

  .guest__value {
    text-align: justify;
    max-width: 543px;
  }

  .guest__footer {
    display: -webkit-box;
    -webkit-box-align: start;
    margin-top: 49px;
    margin-bottom: 16px;
  }

  .guest__footer>*:first-child {
    margin-right: 13px;
  }

  .guest__footer>*:last-child {
    letter-spacing: 0.2px;
  }

  .lounge {}

  .lounge__logo {
    display: -webkit-box;
    margin-bottom: 26px;

  }

  .lounge__logo>* {
    vertical-align: middle;
  }

  .lounge__logo>*:first-child {
    margin-right: 8px;
  }

  .lounge__info {
    padding-bottom: 52px;
    border-bottom: 1px dashed #0082FF;
  }

  .lounge__info>*:not(:last-child) {
    margin-bottom: 26px;
  }

  .lounge__item {
    display: -webkit-box;
    -webkit-box-align: start;
  }

  .lounge__label {
    width: 200px;
    margin-right: 98px;
    text-transform: uppercase;
  }

  .lounge__value {
    text-align: justify;
    max-width: 543px;
  }

  .lounge__footer {
    display: -webkit-box;
    -webkit-box-align: start;
    margin-top: 16px;
    padding-right: 25px;
    max-width: 800px;
  }

  .lounge__footer>*:first-child {
    margin-right: 21px;
  }

  .lounge__footer>*:last-child {
    letter-spacing: 0.2px;
  }

  .services {
    background: #0082FF;
    transform: translate(-0.8px, -1px);
    min-height: 450px;
    border-top-right-radius: 94px;
    padding: 10px 164px 28px 30px;
  }

  .services__title {
    display: -webkit-box;
    -webkit-box-align: center;
    margin-bottom: 22px;
  }

  .services__title .logo {
    height: 26px;
    width: 26px;
    background: white;
    display: -webkit-box;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    border-radius: 50%;
    margin-right: 8px;
  }

  .services__items {
    display: -webkit-box;
    margin-bottom: 5px;
  }

  .services__item {
    color: white;
    border-radius: 7px;
    border: 1px solid #FFF;
    padding: 4px 9px;
    display: inline-block;
    -webkit-box-align: center;
    gap: 7px;
    margin-bottom: 18px;
    white-space: nowrap;
  }


  .services__item:not(:last-child) {
    margin-right: 21px;
  }

  .services__item>*:last-child {
    vertical-align: middle;
  }

  .footer {
    transform: translate(0, -1px);
    padding-right: 20px;
    background: #fff;
    width: 100%;
  }

  .footer>.services {}
</style>


</html>`

    return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100&family=Montserrat:wght@400;500;700&display=swap"
    rel="stylesheet">
      
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      
  <title>Document</title>
  <link rel="stylesheet" href="//use.fontawesome.com/releases/v5.0.7/css/all.css">
</head>

<body id="contentToConvert">
  <div class="wrapper">
    <div class="main">
      <div class="header-logos">
        <div class="ett-logo">
          <img src="./image 161.png" alt="logo">
        </div>
        <div class="ppl-logo">
          <img src="./image 161.png" alt="logo">
        </div>
      </div>
      <div class="header-texts">
        <div class="header-date text-xs-light-grey">Issued {formatDate(created_day)} by ETT Solutions</div>
        <div class="header-code text-xs-bold">{coupon}</div>
      </div>
      <div class="row">
        <div>
          <div class="blueLogoTitle">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="16" height="16" rx="8" fill="#0082FF" />
              <circle cx="6.37452" cy="4.55022" r="1.30022" fill="white" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M3.89453 8.53518C3.69356 9.04961 4.15896 9.51256 4.71125 9.51256H8.08545C8.63775 9.51256 9.10315 9.04961 8.90217 8.53518C8.51121 7.53443 7.53757 6.8255 6.39835 6.8255C5.25914 6.8255 4.2855 7.53443 3.89453 8.53518Z"
                fill="white" />
              <circle cx="8.54329" cy="5.83831" r="1.94366" fill="white" stroke="#0082FF" stroke-width="0.5" />
              <mask id="path-5-outside-1_8_426" maskUnits="userSpaceOnUse" x="4.44356" y="7.35486" width="8" height="6"
                fill="black">
                <rect fill="white" x="4.44356" y="7.35486" width="8" height="6" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M5.62999 9.96194C5.03176 10.8905 5.96979 11.855 7.07437 11.855H10.0748C11.1794 11.855 12.1174 10.8905 11.5192 9.96194C10.8963 8.9951 9.8102 8.35486 8.57458 8.35486C7.33896 8.35486 6.25288 8.9951 5.62999 9.96194Z" />
              </mask>
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M5.62999 9.96194C5.03176 10.8905 5.96979 11.855 7.07437 11.855H10.0748C11.1794 11.855 12.1174 10.8905 11.5192 9.96194C10.8963 8.9951 9.8102 8.35486 8.57458 8.35486C7.33896 8.35486 6.25288 8.9951 5.62999 9.96194Z"
                fill="white" />
              <path
                d="M7.07437 12.355H10.0748V11.355H7.07437V12.355ZM8.57458 8.85486C9.63317 8.85486 10.5641 9.40272 11.0989 10.2327L11.9395 9.69115C11.2284 8.58748 9.98722 7.85486 8.57458 7.85486V8.85486ZM6.05031 10.2327C6.58505 9.40272 7.51599 8.85486 8.57458 8.85486V7.85486C7.16194 7.85486 5.92071 8.58748 5.20967 9.69115L6.05031 10.2327ZM10.0748 12.355C10.7633 12.355 11.4193 12.0571 11.8196 11.5769C12.2391 11.0737 12.3718 10.3621 11.9395 9.69115L11.0989 10.2327C11.2648 10.4903 11.2276 10.7253 11.0515 10.9365C10.8562 11.1708 10.4909 11.355 10.0748 11.355V12.355ZM7.07437 11.355C6.65827 11.355 6.29295 11.1708 6.09767 10.9365C5.92155 10.7253 5.88435 10.4903 6.05031 10.2327L5.20967 9.69115C4.7774 10.3621 4.9101 11.0737 5.32959 11.5769C5.72991 12.0571 6.3859 12.355 7.07437 12.355V11.355Z"
                fill="#0082FF" mask="url(#path-5-outside-1_8_426)" />
            </svg>
            <div class="blueTitle text-sm-bold-blue">Guest</div>
          </div>
          <div class="guestList">
            <div class="guestListItem">
              <div class="label text-sm-grey">VISIT DATE </div>
              <div>
                <div class="guest-value text-sm-bold">11 OCT 2023 | Wednesday</div>
              </div>
            </div>
            <div class="guestListItem">
              <div class="label text-sm-grey">STAY DURATION </div>
              <div class="guest-value text-sm-bold">3 hours</div>
            </div>
            <div class="guestListItem">
              <div class="label text-sm-grey">GUEST</div>
              <div class="guest-value text-sm-bold">
                1 ADULT
              </div>
            </div>
          </div>
        </div>
        <div class="border">
          <img src="qr_code" />
        </div>
      </div>
      <div class="guestLastItem">
        <div class="label text-sm-grey">GUEST NAME</div>
        <div class="guest-value text-sm-bold">theretheretheretheretheremay beaverylongfirstandlastnamehere</div>
      </div>
      <div class="guestNote text-xxs-grey">
        <Svg width="8" height="8" divBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <Path
            d="M3.99971 8C3.99971 5.79028 5.7907 3.99895 8 3.99895C5.7914 3.99895 4.00084 2.20875 3.99971 4.76837e-07C3.99858 2.20856 2.20833 3.99864 0 3.99895C2.20903 3.99926 3.99971 5.79047 3.99971 8Z"
            fill="#9E9B98" />
        </Svg>
        <div>
          Children under 2 years old are admitted free with an adult
        </div>
      </div>
      <div class="guestLine"></div>
      <div class="blueLogoTitle">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="16" height="16" rx="8" fill="#0082FF" />
          <path
            d="M10.9073 7.69425H5.26394C4.78242 7.69425 4.39069 8.08599 4.39069 8.5675V8.92384C4.39069 9.40536 4.78242 9.7971 5.26394 9.7971L10.9073 9.79703C11.3888 9.79703 11.7805 9.40529 11.7805 8.92377V8.56743C11.7805 8.08599 11.3888 7.69425 10.9073 7.69425Z"
            fill="white" />
          <path
            d="M11.5844 6.16203C10.9851 6.16203 10.4974 6.64967 10.4974 7.24903C10.4974 7.26638 10.4988 7.28308 10.5001 7.29986L10.5048 7.37407H10.9075C11.4099 7.37407 11.8615 7.69365 12.0314 8.16935L12.0527 8.22898L12.108 8.19828C12.4555 8.00586 12.6715 7.64218 12.6715 7.24903C12.6715 6.64959 12.1838 6.16203 11.5845 6.16203L11.5844 6.16203Z"
            fill="white" />
          <path
            d="M5.26394 7.37417H5.6667L5.67139 7.29996C5.67274 7.28311 5.67402 7.2664 5.67402 7.24913C5.67402 6.64975 5.18639 6.16213 4.58702 6.16213C3.98759 6.16213 3.49995 6.64969 3.49995 7.24913C3.49995 7.64228 3.7159 8.00596 4.06358 8.19837L4.11888 8.22908L4.14021 8.16945C4.31003 7.69375 4.76156 7.37417 5.26397 7.37417L5.26394 7.37417Z"
            fill="white" />
          <path
            d="M5.99402 7.24915C5.99402 7.26379 5.99281 7.27786 5.99167 7.29215L5.98641 7.37418H10.1849L10.1796 7.29215C10.1784 7.27787 10.1772 7.26379 10.1772 7.24915C10.1772 6.67337 10.5232 6.16149 11.0586 5.94498L11.0922 5.93141V5.55026C11.0922 4.69548 10.3968 4.00002 9.54196 4.00002H6.6293C5.77452 4.00002 5.07905 4.69543 5.07905 5.55026V5.93141L5.11268 5.94498C5.64822 6.16149 5.99405 6.67337 5.99405 7.24915H5.99402Z"
            fill="white" />
          <path
            d="M11.3018 10.0461H4.98151C4.6974 10.0461 4.46487 10.2785 4.46487 10.5627C4.46487 10.8469 4.69731 11.0793 4.98151 11.0793H5.29968V11.5362C5.29968 11.6543 5.39535 11.75 5.51349 11.75C5.63163 11.75 5.72731 11.6543 5.72731 11.5362V11.0793H10.4799V11.5362C10.4799 11.6543 10.5756 11.75 10.6937 11.75C10.8119 11.75 10.9075 11.6543 10.9075 11.5362V11.0793H11.302C11.5861 11.0793 11.8186 10.8469 11.8186 10.5627C11.8185 10.2785 11.586 10.0461 11.3019 10.0461H11.3018Z"
            fill="white" />
        </svg>
        <div class="blueTitle text-sm-bold-blue">Lounge</div>
      </div>
      <div class="loungeList">
        <div class="loungeListItem">
          <div class="label text-sm-grey">NAME</div>
          <div class="value text-sm-bold">{product_name}</div>
        </div>
        <div class="loungeListItem">
          <div class="label text-sm-grey">AIRPORT</div>
          <div class="value text-sm-bold">{airport_title}</div>
        </div>
        <div class="loungeListItem">
          <div class="label text-sm-grey">TERMINAL</div>
          <div class="value text-sm-bold">{terminal}</div>
        </div>
        <div class="loungeListItem">
          <div class="label text-sm-grey">CITY</div>
          <div class="value text-sm-bold">{city_name}</div>
        </div>
        <div class="loungeListItem location">
          <div class="label text-sm-grey">LOCATION</div>
          <div class="value text-sm-bold">{product_address}</div>
        </div>
        <div class="loungeListItem last">
          <div class="label text-sm-grey">OPEN HOURS</div>
          <div class="value text-sm-bold">{open_hours}</div>
        </div>
      </div>
      <div class="loungeLine"></div>
      <div class="loungeNote text-xxs-grey">
        <Svg class="starLogo" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <Path
            d="M3.99971 8C3.99971 5.79028 5.7907 3.99895 8 3.99895C5.7914 3.99895 4.00084 2.20875 3.99971 4.76837e-07C3.99858 2.20856 2.20833 3.99864 0 3.99895C2.20903 3.99926 3.99971 5.79047 3.99971 8Z"
            fill="#9E9B98" />
        </Svg>
        <div>
          <div class="loungeNoteText">
            Guests should ensure that lounge location corresponds to the specific airport or terminal area
          </div>
          <div class="loungeNoteText">
            from which their flight is scheduled to depart/arrive and they have all required travel documents
          </div>
          <div class="loungeNoteText">
            to pass airport controlled zones (immigration and customs procedures, security etc).
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <!-- <div class="mask"></div>
      <div class="mask2"></div> -->
      <div class="footerContainer">
        <div class="whiteLogoTitle" style="margin-bottom: 14px;">
          <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Rect width="16" height="16" rx="8" fill="white" />
            <Path
              d="M9.68233 7.99869C9.01572 8.44191 8.44281 9.0149 7.99964 9.68158C7.55646 9.0149 6.98356 8.44192 6.31695 7.99869C6.98356 7.55546 7.55646 6.98248 7.99964 6.3158C8.44281 6.98248 9.01572 7.55546 9.68233 7.99869Z"
              fill="#0082FF" stroke="#0082FF" strokeWidth="2" />
          </Svg>
          <div class="whiteTitle text-sm-bold-white">Available services</div>
        </div>
        <div class="servicList">
          <div class="servicItem text-sm-bold-white">
            <img src={svgToDataUri(icon)} />
            <text class="service">{item.Title}</text>
          </div>
          <div class="servicItem text-sm-bold-white">
            <img src={svgToDataUri(icon)} />
            <text class="service">{item.Title}</text>
          </div>
          <div class="servicItem text-sm-bold-white">
            <img src={svgToDataUri(icon)} />
            <text class="service">{item.Title}</text>
          </div>
          <div class="servicItem text-sm-bold-white">
            <img src={svgToDataUri(icon)} />
            <text class="service">{item.Title}</text>
          </div>
          <div class="servicItem text-sm-bold-white">
            <img src={svgToDataUri(icon)} />
            <text class="service">{item.Title}</text>
          </div>
          <div class="servicItem text-sm-bold-white">
            <img src={svgToDataUri(icon)} />
            <text class="service">{item.Title}</text>
          </div>
        </div>

        <div class="whiteLogoTitle" style="margin-bottom: 11px; margin-top: 3px;">
          <div class="whiteCircle">
            <Svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M2.6297 9V0H3.50984V9H2.6297ZM2.96243 7.94681C2.37567 7.94681 1.81395 7.8734 1.27728 7.72659C0.740608 7.5734 0.314848 7.37872 0 7.14255L0.483005 6.17553C0.783542 6.38617 1.15564 6.5617 1.59928 6.70213C2.04293 6.84255 2.49732 6.91277 2.96243 6.91277C3.35599 6.91277 3.67442 6.87447 3.91771 6.79787C4.161 6.72128 4.33989 6.61915 4.45438 6.49149C4.56887 6.35745 4.62612 6.20745 4.62612 6.04149C4.62612 5.83723 4.54383 5.67447 4.37925 5.55319C4.21467 5.42553 4 5.32659 3.73524 5.25638C3.47764 5.17979 3.18784 5.10957 2.86583 5.04574C2.55098 4.98191 2.23256 4.90851 1.91055 4.82553C1.59571 4.73617 1.3059 4.62447 1.04114 4.49043C0.783542 4.35 0.572451 4.16489 0.407871 3.93511C0.243292 3.70532 0.161002 3.4117 0.161002 3.05425C0.161002 2.69042 0.268336 2.35851 0.483005 2.05851C0.70483 1.75213 1.03757 1.50957 1.48122 1.33085C1.93202 1.14574 2.50089 1.05319 3.18784 1.05319C3.63864 1.05319 4.08587 1.10426 4.52952 1.20638C4.97317 1.30851 5.35957 1.45532 5.68873 1.64681L5.24866 2.61383C4.91234 2.43511 4.56529 2.30426 4.20751 2.22128C3.84973 2.13191 3.50626 2.08723 3.1771 2.08723C2.7907 2.08723 2.47585 2.12872 2.23256 2.2117C1.99642 2.29468 1.82111 2.40319 1.70662 2.53723C1.59928 2.67128 1.54562 2.82447 1.54562 2.99681C1.54562 3.20106 1.62433 3.36702 1.78175 3.49468C1.94633 3.61596 2.15742 3.7117 2.41503 3.78191C2.67979 3.85213 2.97317 3.92234 3.29517 3.99255C3.61717 4.05638 3.9356 4.12979 4.25045 4.21277C4.57245 4.29574 4.86225 4.40425 5.11986 4.5383C5.38461 4.67234 5.59571 4.85425 5.75313 5.08404C5.91771 5.31383 6 5.60425 6 5.95532C6 6.31277 5.88909 6.64468 5.66726 6.95106C5.45259 7.25106 5.11986 7.49362 4.66905 7.67872C4.21825 7.85745 3.64937 7.94681 2.96243 7.94681Z"
                fill="#0082FF" />
            </Svg>
          </div>
          <div class="whiteTitle text-sm-bold-white">Payment services</div>
        </div>
        <div class="servicList">
          <div class="servicItem text-sm-bold-white">
            <img src={svgToDataUri(icon)} />
            <text class="service">{item.Title}</text>
          </div>
          <div class="servicItem text-sm-bold-white">
<i class="fa-solid fa-house"></i>
            <text class="service">{item.Title}</text>
          </div>
          <div class="servicItem text-sm-bold-white">
            <img src={svgToDataUri(icon)} />
            <text class="service">{item.Title}</text>
          </div>
          <div class="servicItem text-sm-bold-white">
            <img src={svgToDataUri(icon)} />
            <text class="service">{item.Title}</text>
          </div>
          <div class="servicItem text-sm-bold-white">
            <img src={svgToDataUri(icon)} />
            <text class="service">{item.Title}</text>
          </div>

        </div>


      </div>
    </div>
  </div>


  <style>
    * {
      padding: 0;
      margin: 0;
      border: 0;
    }

    *,
    *:before,
    *:after {
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }

    :focus,
    :active {
      outline: none;
    }

    a:focus,
    a:active {
      outline: none;
    }

    nav,
    footer,
    header,
    aside {
      display: block;
    }

    html,
    body {
      height: 100%;
      width: 100%;
      line-height: 1;
      font-size: 14px;
      -ms-text-size-adjusst: 100%;
      -moz-text-size-adjusst: 100%;
      -webkit-text-size-adjust: 100%;
    }

    input,
    button,
    textarea {
      font-family: inherit;
    }

    input:-ms-clear {
      display: none;
    }

    button {
      cursor: pointer;
    }

    button:-moz-focus-innesr {
      padding: 0;
      border: 0;
    }

    a,
    a:visited {
      text-decoration: none;
    }

    a:hover {
      text-decoration: none;
    }

    ul li {
      list-style: none;
    }

    img {
      vertical-align: top;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-size: inherit;
      font-weight: 400;
    }

    * {
      font-family: 'Inter', sans-serif;
      font-family: 'Montserrat', sans-serif;
    }

    .text-xxs-grey {
      color: #9E9B98;
      font-size: 10px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    .text-xs-light-grey {
      color: #BFBFBF;
      text-align: center;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    .text-xs-light-white {
      color: white;
      text-align: center;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }

    .text-sm-bold-white {
      color: white;
      font-size: 13.3px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }

    .text-sm-grey {
      color: #9E9B98;
      font-size: 13.3px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }

    .text-sm-bold-blue {
      color: #0082FF;
      font-size: 13.3px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }

    .text-sm-bold {
      color: #141414;
      font-size: 13.3px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }

    .text-xs-bold {
      color: #141414;
      font-size: 12px;
      font-weight: 700;
    }

    .wrapper {
      width: 100%;
      background: #0082FF;
      padding-left: 16px;
      
    }

    .main {
      min-height: 625px;
      padding: 0 24px 0 15px;
      background: #fff;
      border-bottom-left-radius: 70px;
    }

    .header-logos {
      display: -webkit-box;
      -webkit-box-pack: justify;
      -webkit-box-align: center;
      padding-top: 17px;
      margin-bottom: 10px;
    }

    .ett-logo {
      width: 220px;
      height: 42px;
    }

    .ppl-logo {
      width: 110px;
      height: 42px;
      margin-right: 9px;
    }

    .ett-logo img,
    .ppl-logo img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .header-texts {
      display: -webkit-box;
      -webkit-box-pack: justify;
      -webkit-box-align: center;
      margin-bottom: 11px;
    }

    .header-date {}

    .header-code {
      transform: translateY(4px);
      text-align: center;
      margin-right: -12px;
      width: 153px;
    }

    .row {
      display: -webkit-box;
      -webkit-box-pack: justify;
    }

    .border {
      align-self: stretch;
      width: 99px;
      height: 99px;
      border: 1px solid #0082FF;
      border-radius: 11px;
      margin-right: 15px;
      overflow: hidden;
      padding: 9px;
    }

    .blueLogoTitle {
      display: -webkit-box;
      -webkit-box-align: center;
      margin-bottom: 16px;
    }

    .blueLogoTitle>*:first-child {
      margin-right: 5px;
    }

    .blueTitle {}

    .guestListItem {
      display: -webkit-box;
      min-height: 27px;
    }

    .guestLastItem {
      display: -webkit-box;
      min-height: 32px;
      margin-bottom: 14px;
    }

    .guestLastItem .guest-value {
      max-width: 355px;
    }

    .label {
      width: 120px;
      margin-right: 60px;
    }

    .guest-value {
      max-width: 326px;
      vertical-align: middle;
    }

    .guestNote {
      display: -webkit-box;
      margin-bottom: 10px;
      letter-spacing: -0.45px;
    }

    .guestNote>*:first-child {
      margin-right: 8px;
    }

    .guestLine {
      height: 2px;
      border-bottom: 1px dashed #0082FF;
      margin-bottom: 26px;
    }

    .loungeList {
      margin-bottom: 15px;
    }

    .loungeListItem {
      display: -webkit-box;
      -webkit-box-align: start;
      min-height: 32px;
    }

    .loungeListItem.location {
      min-height: 64px;
    }

    .loungeListItem.last {
      min-height: 16px;
    }

    .loungeListItem>*:first-child {
      margin-right: 60px;
    }

    .loungeListLastItem {
      display: -webkit-box;
      -webkit-box-align: start;
      gap: "60px";
    }

    .lastLoungeListItem {
      display: -webkit-box;
      gap: "60px";
      min-height: "48px";
      margin-bottom: "11px";
    }

    .loungeLine {
      height: 2px;
      border-bottom: 1px dashed #0082FF;
      margin-bottom: 10px;
    }

    .loungeNote {
      display: -webkit-box;
    }

    .loungeNote>*:first-child {
      margin-right: 13px;
    }

    .loungeNoteText {
      white-space: nowrap;
      width: 437px;
      letter-spacing: -0.45px;
    }

    .footer {
      background: #fff;
      padding-right: 17px;
      position: relative;
    }

    .mask {
      position: absolute;
      width: 200px;
      height: 30px;
      background: #fff;
      top: -1;
      right: 0;
    }

    .mask2 {
      position: absolute;
      width: 200px;
      height: 30px;
      background: #fff;
      bottom: -1;
      right: 0;
    }

    .footerContainer {
      min-height: 217px;
      width: 100%;
      background: #0082FF;
      border-top-right-radius: 70px;
      margin-left: -0.5px;
      margin-top: -0.5px;
      padding: 7px 15px 0px 15px;
    }

    .whiteLogoTitle {
      display: -webkit-box;
    }

    .whiteLogoTitle>*:first-child {
      margin-right: 5px;
    }

    .whiteCircle {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: white;
      display: -webkit-box;
      -webkit-box-pack: center;
      -webkit-box-align: center;
    }

    .servicList {
      display: -webkit-box;
      flex-wrap: wrap;
    }


    .servicItem {
      margin:0 0 13px 0;
      -webkit-box-align: center;
      border: 1px solid;
      border-radius: 7px;
      padding: 3px 6px;
      color: white;
    display: inline-block;
    -webkit-box-align: center;
    white-space: nowrap;
    }
    .servicItem .payment{
      margin:13px 0 0 0;
    }

    .servicItem:not(:last-child) {
      margin-right: 13px;
    }

    .servicItem>*:first-child {
      margin-right: 6px;
    }
  </style>
</body>

</html>`
}
