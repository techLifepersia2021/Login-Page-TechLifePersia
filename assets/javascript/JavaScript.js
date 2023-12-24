document.body.addEventListener("load", moveObject());
function moveObject() {
  setInterval(function () {
    let randHorizontal = Math.floor(Math.random() * window.innerWidth) + "px";
    let randVertical = Math.floor(Math.random() * window.innerHeight) + "px";

    let greenCircle = document.getElementById("circleGreen");
    greenCircle.style.top = randVertical;
    greenCircle.style.left = randHorizontal;
  }, 1000);
  setInterval(function () {
    let randHorizontal = Math.floor(Math.random() * window.innerWidth) + "px";
    let randVertical = Math.floor(Math.random() * window.innerHeight) + "px";

    let redCircle = document.getElementById("circleRed");
    redCircle.style.top = randVertical;
    redCircle.style.left = randHorizontal;
  }, 1000);
  setInterval(function () {
    let randHorizontal = Math.floor(Math.random() * window.innerWidth) + "px";
    let randVertical = Math.floor(Math.random() * window.innerHeight) + "px";

    let purpleCircle = document.getElementById("circlePurple");
    purpleCircle.style.top = randVertical;
    purpleCircle.style.left = randHorizontal;
  }, 1000);
}
/************************************************ */
window.onload = generateCaptcha;
function generateCaptcha() {
  var alpha = new Array(
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0"
  );
  var i;
  for (i = 0; i < 4; i++) {
    var a = alpha[Math.floor(Math.random() * alpha.length)];
    var b = alpha[Math.floor(Math.random() * alpha.length)];
    var c = alpha[Math.floor(Math.random() * alpha.length)];
    var d = alpha[Math.floor(Math.random() * alpha.length)];
    var e = alpha[Math.floor(Math.random() * alpha.length)];
    var f = alpha[Math.floor(Math.random() * alpha.length)];
  }
  var code = a + b + c + d + e + f;
  document.getElementById("mainCaptcha").value = code;
}
let  CheckValidCaptchaBtn=document.getElementById('checkValidation')
CheckValidCaptchaBtn.addEventListener('click',CheckValidCaptcha)
var conter_failed = 0;
function CheckValidCaptcha() {
  let string1 = removeSpaces(document.getElementById("mainCaptcha").value);
  let string2 = removeSpaces(document.getElementById("txtInputCaptcha").value);
  if (string1 == string2) {
    document.querySelector(".buttonLoginContainer").style.display = "flex";
    return true;
  } else {
    generateCaptcha();
    document.getElementById("txtInputCaptcha").value = " ";
    document.getElementById("txtInputCaptcha").disabled = true;
    document.querySelector(".buttonLoginContainer").style.display = "none";
    if (conter_failed == 1) {
      let timeLeft = Math.floor(Math.random() * 11) + 1;
      let elem = document.getElementById("timer");
      let timerId = setInterval(countdown, 1000);
      function countdown() {
        if (timeLeft == -1) {
          clearTimeout(timerId);
          elem.innerHTML = '';
          generateCaptcha();
        } else {
          elem.innerHTML = timeLeft;
          timeLeft--;
        }
        conter_failed = 1;
      }
    }
    document.getElementById("txtInputCaptcha").disabled = false;
    conter_failed++;
  }

}
function removeSpaces(string) {
  return string.split(" ").join("");
}
/***************************************/
let inputPassword = document.getElementById("pwd");
inputPassword.addEventListener("keydown", validatePassword);
function validatePassword() {
  var inputValue = document.getElementById("pwd").value;
  var regexPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  if (regexPattern.test(inputValue)) {
    inputPassword.style.border = "#00cd68 2px solid";
    document.getElementById('txtInputCaptcha').disabled=false;
    document.getElementById('checkValidation').disabled=false;
  } else {
    inputPassword.style.border = "#FF3332 2px solid";
    document.getElementById('txtInputCaptcha').disabled=true;
    document.getElementById('checkValidation').disabled=true;
  }
}
let inputUserName = document.getElementById("un");
inputUserName.addEventListener('blur',function(){
  if(inputUserName.value==='')
  {
    inputUserName.style.border='0px'
  }
})
inputUserName.addEventListener("keydown", validateUserName);
function validateUserName() {
  var inputValue = document.getElementById("un").value;
  var regexPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (regexPattern.test(inputValue)) {
    inputUserName.style.border = "#00cd68 2px solid";
    document.getElementById("pwd").disabled = false;
  } else {
    inputUserName.style.border = "#FF3332 2px solid";
    document.getElementById("pwd").disabled = true;
  }
}