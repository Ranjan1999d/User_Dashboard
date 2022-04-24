let list = document.querySelectorAll('.navigation li');
let navigation = document.querySelector('.navigation');
let toggle = document.querySelector('.toggle');
let main = document.querySelector('.main');
let dashbord = document.querySelector('.card_dashbord');
let card = document.querySelector('.card');
let settingMenu = document.querySelector(".setting-menu");

toggle.onclick = function() {
    navigation.classList.toggle("toggleActive");
    main.classList.toggle("toggleActive");
}

// toggle.onclick = function() {
//     card.classList.toggle("dashbordActive");
//     dashbord.classList.toggle("dashbordActive");
// }
function SettinMenu() {
    settingMenu.classList.toggle("setting-menu_display");
}

function activelink() {
    list.forEach((item) =>
        item.classList.remove('active'));
    this.classList.add('active');

}
list.forEach((item) =>
    item.addEventListener('mouseover', activelink)
);