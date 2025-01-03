const nav_menu=document.getElementById("nav-menu"),
    nav_close=document.getElementById("nav-close"),
    nav_toggle=document.getElementById("nav-toggle");

if(nav_toggle){
    nav_toggle.addEventListener('click',() =>{
        nav_menu.classList.add("show-menu");
    });
};
if(nav_close){
    nav_close.addEventListener('click',()=>{
        nav_menu.classList.remove("show-menu")
    });
};
const nav_link=document.querySelectorAll(".nav-link");

const linkaction= ()=>{
    const nav_menu=document.getElementById("nav-menu");
    nav_menu.classList.remove("show-menu");
}
nav_link.forEach(n => n.addEventListener('click',linkaction));
// chabge background to header
const backgroundHeader= ()=>{
    const header= document.getElementById("header");
    this.scrollY>= 50? header.classList.add("bg-header")
                    :header.classList.remove("bg-header");
};
window.addEventListener('scroll',backgroundHeader)
backgroundHeader()
// swiper 
const swiperservics = new Swiper('.sercive-swiper', {
    // Optional parameters
    loop: true,
    grabCursor:true,
    spaceBetween:24,
    slidesPerView:'auto',

    // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
});

// show scroll-up
const showscrollup= ()=>{
    const scrollup=document.getElementById('scrollup');
    this.scrollY>=350?scrollup.classList.add("show-scroll-up")
                    :scrollup.classList.remove("show-scroll-up");
};