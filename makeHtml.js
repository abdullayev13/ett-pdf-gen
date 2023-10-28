module.exports = {Make}

function Make(data) {
    return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
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
            <img src="./ett2.png" alt="ett-logo">
          </div>
          <div class="header__partner">
            <img src="" alt="ett-logo">
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
              <img src="${data.QrCodeLink}" alt="qr">
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
          <!-- todo -->
          ${data.OtherServices.join(' ')}
          
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
          
          ${data.PaymentServices.join(' ')}

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

}

