function rudyPic(){
    window.open("./Pics/rudyHangingOut.JPG", "Rudy at Work", "width=500; height=450");
}

function contactFormSubmit(){
    alert('Your contact info has been submitted in the form!\n(Please note that this info has not been sent as this feature is still in progress)');
}

const rudy = document.querySelector("div.navbar a#Rudy");
rudy.addEventListener('click', rudyPic);

// Add JS with pop up thanking user for form submission on contact page
const submitButton = document.querySelector("div.subPage form");
submitButton.addEventListener('submit', contactFormSubmit);