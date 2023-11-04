const myImage = document.querySelector("img");

myImage.onclick = () =>{
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "imagens/escudo-internacional.png"){
        myImage.setAttribute("src", "imagens/escudo-antigo-do-inter.png");
    }else {
        myImage.setAttribute("src", "imagens/escudo-internacional.png");
    }
}

let myBotao = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Por favor digite o seu nome.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `O Internacional é o maior time do RS, ${myName}`;
    }
  }
  

if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla é legal, ${storedName}`;
  }

myBotao.onclick = ()=>{
    setUserName();
}
  