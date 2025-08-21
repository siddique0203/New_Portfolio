const sections = document.querySelectorAll(".content");
const navLinks = document.querySelectorAll("#headOption a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150; // adjust for header height
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

window.addEventListener("load", () => {
    navLinks.forEach(link => link.classList.remove("active"));
    document.querySelector('#headOption a[href="#no1"]').classList.add("active");
});


const accordions = document.querySelectorAll('.accordion-btn');

accordions.forEach(btn => {
    btn.addEventListener('click', function() {
        this.classList.toggle('active');
        const panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
});

