// window.addEventListener('DOMContentLoaded', () => {
//     const menu = document.querySelector('.menu'),
//     menuItem = document.querySelectorAll('.menu__item'),
//     humburger = document.querySelector('.hamburger');

//     humburger.addEventListener('click', () => {
//         humburger.classList.toggle('hamburger_active');
//         menu.classList.toggle('menu_active');
//     });

//     menuItem.forEach(item => {
//         item.addEventListener('click', () => {
//             humburger.classList.toggle('hamburger_active');
//             menu.classList.toggle('menu_active');
//         })
//     })
// })

new WOW().init();

if (document.documentElement.clientWidth > 2500) {
var main__label = document.querySelector('.main__label');
document.addEventListener('scroll', function() {
    main__label.style.top = (250+document.documentElement.scrollTop*0.3)+'px';
});
} else {
var main__label = document.querySelector('.main__label');
document.addEventListener('scroll', function() {
    main__label.style.top = (90+document.documentElement.scrollTop*0.3)+'px';
});
};
