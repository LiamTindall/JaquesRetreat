let navHidden = true;
const nav = document.querySelector("nav");

function slideMenu() {
    if (navHidden) {

        navHidden = false;
        nav.classList.add("active");

    } else {

        navHidden = true;
        nav.classList.remove("active");

    }
}