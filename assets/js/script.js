const menu_btn = document.querySelector(".navbar_hidden_icon");
const menu_hidden = document.querySelector(".navbar_hidden_click");
const body = document.querySelector("body");
const close = document.querySelector(".navbar_hidden_click_close");
const loginicon = document.querySelector(".log_in_icon");
const login = document.querySelector(".login");
const login_close = document.querySelector(".login_close")
const lets_chat = document.querySelector(".lets_chat");
const lets_chat_hidden = document.querySelector(".lets_chat_hidden");
const lets_chat_open = document.querySelector(".lets_chat_open");
const lets_chat_close = document.querySelector(".lets_chat_close");
const nav = document.querySelector("nav")

menu_btn.addEventListener("click", function () {
    body.classList.add("stop");
    menu_hidden.classList.add("open_menu");
})


close.addEventListener("click", function () {
    body.classList.remove("stop");
    menu_hidden.classList.remove("open_menu");
})


loginicon.addEventListener("click", function () {
    nav.style.display="none"
    body.classList.add("stop");
    login.classList.add("login_open");
    login_close.addEventListener("click",function () {
        body.classList.remove("stop");
        login.classList.remove("login_open");  
        nav.style.display="block";
    })


})


lets_chat.addEventListener("click", function () {
    lets_chat_open.classList.add("lets_chat_open_click");
    lets_chat_open.classList.remove("lets_chat_open");
    lets_chat.style.display = "none"
    lets_chat_close.addEventListener("click", function () {
        lets_chat_open.classList.remove("lets_chat_open_click");
        lets_chat_open.classList.add("lets_chat_open");
        lets_chat.style.display = "block"
    })
})

lets_chat_hidden.addEventListener("click", function () {
    lets_chat_open.classList.add("lets_chat_open_click");
    lets_chat_open.classList.remove("lets_chat_open");
    lets_chat_hidden.style.display = "none"
    lets_chat_close.addEventListener("click", function () {
        lets_chat_open.classList.remove("lets_chat_open_click");
        lets_chat_open.classList.add("lets_chat_open");
        lets_chat_hidden.style.display = "block"
    })
})

