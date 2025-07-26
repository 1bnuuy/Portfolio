function reset() {
    document.getElementById("ContactForm").reset();
    Show(0);
}

//Header Section
const root = document.querySelector(":root")
const sidebar = document.querySelector(".menu")
const sidebarBtn = document.querySelector("#menu-burger")

var x = "dark"

window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("header-sticky", window.scrollY > 0);
});

function Menu() {
    sidebar.classList.toggle("menu-opened");
    document.querySelector("main").classList.toggle("blur-effect")
}

document.addEventListener("click", e => {
    if (!sidebar.contains(e.target) && e.target !== sidebarBtn) {
        sidebar.classList.remove("menu-opened");
        document.querySelector("main").classList.remove("blur-effect")
    }
})

function ThemeSwitch() {
    const dark = "fa-solid fa-moon"
    const light = "fa-solid fa-sun"
    const theme = document.querySelectorAll("[data-theme]")

    if (x == "dark") {
        theme.forEach(icon => {
            icon.className = icon.className.replace(dark, light).trim() //trim() cleans up className
        })

        root.style.setProperty('--color-main', '#f3f3f3');
        root.style.setProperty('--color-white', '#12191f');
        root.style.setProperty('--color-accent', '#00a79e');
        root.style.setProperty('--text-stroke-rgb', '18, 25, 31');

        document.getElementById("home").style.backgroundImage = "url('./images/intro-light.webp')"

        x = "light"
    } else {
        theme.forEach(icon => {
            icon.className = icon.className.replace(light, dark).trim() //trim() cleans up className
        })

        root.style.setProperty('--color-main', '#12191f');
        root.style.setProperty('--color-white', '#ecf3fc');
        root.style.setProperty('--color-accent', '#fa5453');
        root.style.setProperty('--text-stroke-rgb', '236, 243, 252');

        document.getElementById("home").style.backgroundImage = "url('./images/intro-dark.webp')"
        
        x = "dark"
    }
}

//Hire Section
function Show(x) {
    let selection = document.getElementById("selection").getElementsByTagName("a")
    let slides = document.getElementsByClassName("box")

    for (let i = 0; i < selection.length; i++) {
        selection[i].className = selection[i].className.replace("active", "").trim() //trim() cleans up className
        slides[i].style.display = "none"
    }

    selection[x].className += "active"
    slides[x].style.display = "grid"
}

//Projects Section
let slideIndex = 1;

function plusSwipe(n, state) {
  Swipe(slideIndex += n, state);
}

function Swipe(y, z) {
    let proj = document.getElementsByClassName("projects")

    if (y > proj.length) {slideIndex = 1}
    if (y < 1) {slideIndex = proj.length}

    for (let i = 0; i < proj.length; i++) {
        proj[i].style.display = "none"
    }

    proj[slideIndex-1].style.display = "flex"
    proj[slideIndex-1].style.animationName = z
}