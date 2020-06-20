window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}
cookieconsent.run({
    "notice_banner_type": "simple",
    "consent_type": "express",
    "palette": "light",
    "language": "it"
});
gtag('js', new Date());
gtag('config', 'UA-118364424-5');
M.AutoInit();

var instance = M.Carousel.init({
    fullWidth: true
});