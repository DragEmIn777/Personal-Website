function rudyPic(){
    window.open("./Pics/rudyHangingOut.JPG", "Rudy at Work", "width=500; height=450");
}

const rudy = document.querySelector("div.navbar a#Rudy");
rudy.addEventListener('click', rudyPic);

// Add JS with pop up thanking user for form submission on contact page