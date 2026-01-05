const drumPads = document.querySelectorAll(".drum-pad");

drumPads.forEach((pad)=>{
  pad.addEventListener("click",() => {
    const audio = pad.querySelector("audio");
    audio.curretTime = 0;
    audio.play();

    const display = document.getElementById("display");
    display.innerText = pad.id;
  });
})

document.addEventListener("keydown",(e) => {
  const key = e.key.toUpperCase();
  const audio = document.getElementById(key);;

  if (audio){
    audio.currentTime = 0;
    audio.play();

    const display = document.getElementById("display"); 
    display.innerText = audio.parentElement.id;
  }
})