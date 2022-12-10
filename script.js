// Selecting elements
const slidingCards = document.querySelectorAll(".sliding-card");
const nextButton = document.querySelector("#next");
const prevButton = document.querySelector("#prev");
const iButton = document.querySelector("#iButton");
const portfolButton = document.querySelector("#projectsButton");
const contactButton = document.querySelector("#feedBackButton");
const projekti3Button = document.querySelector("#projeti3Button");
const body = document.querySelector("body");


let bgFalse = false;

const bgStyle = () => {
  
  if(bgFalse == true){
    document.body.style.background = "linear-gradient(130deg,rgb(214, 214, 218) 0%,rgba(5, 10, 54, 1) 70%,rgb(114, 0, 0) 100%)"
    bgFalse = false;
  }else if(bgFalse == false){
    document.body.style.background = "linear-gradient(130deg,rgb(214, 214, 218) 0%,rgba(5, 10, 54, 1) 70%,rgb(108, 0, 0) 96%,rgb(110, 0, 0) 100%)"
    bgFalse = true;
  }
}

setInterval(function(bgFalse){
  bgStyle(bgFalse);
}, 1000)



// Next Card
const nextCard = () => {
    const currentCard = document.querySelector(".current");
    const beforeCurrentCard = document.querySelector(".before-current");
    const afterCurrentCard = document.querySelector(".after-current");

    currentCard.classList.remove("current");
    beforeCurrentCard.classList.remove("before-current");
    afterCurrentCard.classList.remove("after-current");

    // Adding classes
    currentCard.classList.add("after-current");
    afterCurrentCard.classList.add("before-current");
    beforeCurrentCard.classList.add("current");
    

    return;
};


// Prev Card

const prevCard = () => {//Duunari
    const currentCard = document.querySelector(".current");//portfolio
    const beforeCurrentCard = document.querySelector(".before-current");//yhteystiedot
    const afterCurrentCard = document.querySelector(".after-current");//minä

    //Removing classes
    currentCard.classList.remove("current");
    beforeCurrentCard.classList.remove("before-current");
    afterCurrentCard.classList.remove("after-current");

    // Adding classes
    currentCard.classList.add("before-current");
    afterCurrentCard.classList.add("current");
    beforeCurrentCard.classList.add("after-current");
};



//EventListeners
nextButton.addEventListener("click", () => {
    nextCard();
});

prevButton.addEventListener("click", () => {
    prevCard();
});

iButton.addEventListener("click", () => {
    const currentCard = document.querySelector(".current");//portfolio
    const beforeCurrentCard = document.querySelector(".before-current");//yhteystiedot
    const afterCurrentCard = document.querySelector(".after-current");//minä
    
    const getMe = document.getElementById("mina").className;
    

switch (getMe) {
  case "sliding-card before-current":
    console.log("before-current")
    currentCard.classList.remove("current");
    beforeCurrentCard.classList.remove("before-current");
    afterCurrentCard.classList.remove("after-current");

    currentCard.classList.add("after-current");
    afterCurrentCard.classList.add("before-current");
    beforeCurrentCard.classList.add("current");
    break;
  case "sliding-card after-current":
    console.log("after-current")
    currentCard.classList.remove("current");
    beforeCurrentCard.classList.remove("before-current");
    afterCurrentCard.classList.remove("after-current");

    currentCard.classList.add("before-current");
    afterCurrentCard.classList.add("current");
    beforeCurrentCard.classList.add("after-current");
    break;
}
} )

portfolButton.addEventListener("click", () => {
    const currentCard = document.querySelector(".current");//portfolio
    const beforeCurrentCard = document.querySelector(".before-current");//yhteystiedot
    const afterCurrentCard = document.querySelector(".after-current");//minä
    
    const getPortfol = document.getElementById("portfol").className;
    

switch (getPortfol) {
  case "sliding-card before-current":// If portfolio card class is "before-current" --> add "current"
    console.log("before-current")
    //Remove classes
    currentCard.classList.remove("current");
    beforeCurrentCard.classList.remove("before-current");
    afterCurrentCard.classList.remove("after-current");
    //Add classes
    currentCard.classList.add("after-current");
    afterCurrentCard.classList.add("before-current");
    beforeCurrentCard.classList.add("current");
    break;
  case "sliding-card after-current": // If portfolio card class is "after-current" --> add "current"
    console.log("after-current")
    //Remove classes
    currentCard.classList.remove("current");
    beforeCurrentCard.classList.remove("before-current");
    afterCurrentCard.classList.remove("after-current");
    // Add classes
    currentCard.classList.add("before-current");
    afterCurrentCard.classList.add("current");
    beforeCurrentCard.classList.add("after-current");
    break;
}
} )

contactButton.addEventListener("click", () => {
    const currentCard = document.querySelector(".current");//portfolio
    const beforeCurrentCard = document.querySelector(".before-current");//yhteystiedot
    const afterCurrentCard = document.querySelector(".after-current");//minä
    
    const getContact = document.getElementById("contact").className;
    

switch (getContact) {
  case "sliding-card before-current":// If portfolio card class is "before-current" --> add "current"
    console.log("before-current")
    //Remove classes
    currentCard.classList.remove("current");
    beforeCurrentCard.classList.remove("before-current");
    afterCurrentCard.classList.remove("after-current");
    //Add classes
    currentCard.classList.add("after-current");
    afterCurrentCard.classList.add("before-current");
    beforeCurrentCard.classList.add("current");
    break;
  case "sliding-card after-current": // If portfolio card class is "after-current" --> add "current"
    console.log("after-current")
    //Remove classes
    currentCard.classList.remove("current");
    beforeCurrentCard.classList.remove("before-current");
    afterCurrentCard.classList.remove("after-current");
    // Add classes
    currentCard.classList.add("before-current");
    afterCurrentCard.classList.add("current");
    beforeCurrentCard.classList.add("after-current");
    break;
}
} )


