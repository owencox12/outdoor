let burger = document.querySelector(".header__burger")

let burgerMenu = document.querySelector(".header__burger_list")

burger.addEventListener("click", function(){
    burger.classList.toggle("header__burger_active")
    burgerMenu.classList.toggle("header__burger_list_active")
})


window.addEventListener("scroll", function(){
    if(scrollY>= 1) {
        document.querySelector(".header").classList.add("header__active")
    } else {
        document.querySelector(".header").classList.remove("header__active")
    }
})

let logo = document.querySelector(".header__item_logo")

logo.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})