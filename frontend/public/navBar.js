document.addEventListener("DOMContentLoaded", function () {
    const navBar = document.querySelector(".navBar");
    const homeImg = document.querySelector(".homeImg");
  
    window.addEventListener("scroll", function () {
      if (window.scrollY > homeImg.offsetHeight) {
        navBar.classList.add("scrolled");
      } else {
        navBar.classList.remove("scrolled");
      }
    });
  });
  