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