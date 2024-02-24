"use strict";
document.addEventListener("DOMContentLoaded", ()=>{
  document.querySelector("input").addEventListener("input", () => {
    if (
      document.querySelector("input").value.length > 0 &&
      document.querySelector("input").value.length <= 3
    ) {
      document.querySelector("span").innerHTML = "Weak password!";
      document.querySelector("span").style.color = "red";
    } else if (
      document.querySelector("input").value.length > 3 &&
      document.querySelector("input").value.length <= 5
    ) {
      document.querySelector("span").innerHTML = "Medium password!";
      document.querySelector("span").style.color = "yellow";
    } else if (document.querySelector("input").value.length > 5) {
      document.querySelector("span").innerHTML = "Strong password!";
      document.querySelector("span").style.color = "Green";
    } else {
      document.querySelector("span").innerHTML = "Enter password!";
      document.querySelector("span").style.color = "Red";
      document.querySelector("span").style.textDecoration = "underline";
    }
  });
  //style.git
  document.querySelector("#git").style.position = "absolute";
  document.querySelector("#git").style.top = "80%";
  document.querySelector("#git").style.left = "50%";
  document.querySelector("#git").style.transform = "translate(-50%, -50%)";
  //insta
  document.querySelector("#insta").style.position = "absolute";
  document.querySelector("#insta").style.top = "80%";
  document.querySelector("#insta").style.left = "45%";
  document.querySelector("#insta").style.transform = "translate(-50%, -50%)";
  document.querySelector("#insta").style.background =
    "linear-gradient(45deg, #F58529,#FEDA77,#DD2A7B, #8134AF, #515BD4";
  document.querySelector("#insta").style.borderRadius = "20%";
  //button link to open
  document.querySelector("#git").addEventListener("click", ()=>{
	let gitLink = "https://github.com/collinsrop";
	window.open(gitLink,"_blank");
});
document.querySelector("#insta").addEventListener("click", ()=>{
    let gramLink = "https://www.instagram.com/ropcollins1/";
	window.open(gramLink,"_blank");
});
});




