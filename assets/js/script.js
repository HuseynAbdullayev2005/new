const menu_btn = document.querySelector(".navbar_hidden_icon")
const menu_hidden = document.querySelector(".navbar_hidden_click")
const boydy = document.querySelector("body")
const close = document.querySelector(".navbar_hidden_click_close")
menu_btn.addEventListener("click",function () {
    boydy.classList.add("stop");
menu_hidden.classList.add("open_menu");
})
close.addEventListener("click",function () {
    boydy.classList.remove("stop");
    menu_hidden.classList.remove("open_menu");
})