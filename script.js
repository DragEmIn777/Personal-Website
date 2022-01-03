function rudyPic(){
    window.open("./Pics/rudyHangingOut.JPG", "Rudy at Work", "width=500; height=450");
}

const rudy = document.querySelector("div.navbar a#Rudy");
rudy.addEventListener('click', rudyPic);