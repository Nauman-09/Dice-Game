var randomNum1 = Math.floor(Math.random() * 6) + 1;
var randomImg1Source = "Images/dice" + randomNum1 + ".png";
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImg1Source);


var randomNum2 = Math.floor(Math.random() * 6) + 1;
var randomImg2Source = "Images/dice" + randomNum2 + ".png";
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImg2Source);

var finalMessage = document.getElementsByTagName("h1")[0];

if (randomNum1 > randomNum2) {
 finalMessage.innerText ="Player1 Win🥳"
} else if (randomNum1 < randomNum2) {
  finalMessage.innerText = "Player2 win🥳"
} else {
  finalMessage.innerText = "Draw😒"
}
