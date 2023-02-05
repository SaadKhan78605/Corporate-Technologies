let setBg = () => {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("brand-logo").style.color = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
  }
  let logo = document.getElementById("brand-name");
  logo.addEventListener("click", setBg);
  setBg();


// WELCOME ALERT

setTimeout (()=>{
    alert("Welcome to my Website This Website is Fully Dynamic Please Explore");
}, 4000)