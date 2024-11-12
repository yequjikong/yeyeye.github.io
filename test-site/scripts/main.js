// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
  }
  
// let sum = multiply(3,7)
// console.log(sum)

// document.querySelector("html").addEventListener("click", function () {
//     alert("别戳我，我怕疼！");
//   });

  const myImage = document.querySelector("img");

  myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/fc-pen.png") {
      myImage.setAttribute("src", "images/fc-pen2.png");
    } else {
      myImage.setAttribute("src", "images/fc-pen.png");
    }
  };
  
  let myButton = document.querySelector("button");
  let myHeading = document.querySelector("h1");

  function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }
  
  myButton.onclick = function () {
    setUserName();
  };
  