//style header
const header = document.querySelector('header');

function changeHeaderBackground() {
  if (window.scrollY > 0) {
    header.classList.add("scroll");
  }else{
    header.classList.remove("scroll");
  }
}
window.addEventListener('scroll', changeHeaderBackground);
window.addEventListener('load', changeHeaderBackground);


// modal and bg_overlay
modal = document.querySelector('.gallery_sec__modal_img');
bg_overlay = document.querySelector('.bg_overlay');
modal_img = document.querySelector('.gallery_sec__modal_img img');

function zoomImage(src){
    let img = src.closest('.gallery__images__single').querySelector('img');
    console.log(img);
    modal_img.src = img.src;
    console.log(modal_img);
    modal.classList.add("active");
    bg_overlay.classList.add("active");
}

function close_modal(){
    modal.classList.remove("active");
    bg_overlay.classList.remove("active");
}

function close_items(){
    modal.classList.remove("active");
    bg_overlay.classList.remove("active");
}



// open & close menu
menu = document.querySelector('.header__menu');
icon = document.querySelector('.fa-bars');

function open_close_menu(){
    menu.classList.toggle("active");
    if(menu.classList.contains("active")){
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    }else{
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
}


// open & close about questions
function open_close_question(question){
  question.classList.toggle("active");
}

// loader
window.addEventListener("load", function () {
  document.querySelector(".loader").style.display = "none";
});