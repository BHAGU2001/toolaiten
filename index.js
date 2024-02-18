// Add animations
document.addEventListener("DOMContentLoaded", function() {
    animateHeading();
  });
  
  function animateHeading() {
    const mainHeading = document.getElementById("main-heading");
    const subHeading = document.getElementById("sub-heading");
  
    mainHeading.style.opacity = "0";
    subHeading.style.opacity = "0";
  
    setTimeout(() => {
      mainHeading.style.transition = "opacity 1s ease-in-out";
      subHeading.style.transition = "opacity 1s ease-in-out";
      mainHeading.style.opacity = "1";
      subHeading.style.opacity = "1";
    }, 500);
  }


//sticky navbar//

const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 50)
})

// togle nav
let menuIconn = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIconn.onclick = ()=>{
    menuIconn.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}

window.onscroll = ()=>{
    menuIconn.classList.remove("bx-x");
    navlist.classList.remove("open");
}

  //active menu sec//

let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}


activeMenu();
window.addEventListener("scroll",activeMenu);