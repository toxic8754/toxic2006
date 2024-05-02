let navbar = document.querySelector(".navbar");


document.querySelector("#menu-btn").onclick = () => {
    navbar.classList.toggle("active");
    searchform.classList.remove(".active");
};

let searchform = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
    searchform.classList.toggle("active");
    navbar.classList.remove("active");
};
window.onscroll = () => {
    navbar.classList.remove("active");
    searchform.classList.remove("active");
};
document.addEventListener('DOMContentLoaded', function () {
    const section = document.querySelectorAll('.animated-section');
    function checkscroll() {
        section.forEach(section => {
            const rect = section.getBoundingClientRect();
            const isvisible = (rect.top <= window.innerHeight / 2);
            if (isvisible) {
                section.classList.add('animate');
            }
        });
    }
    checkscroll();
    window.addEventListener('scroll', function () {
        checkscroll();
    });
})
