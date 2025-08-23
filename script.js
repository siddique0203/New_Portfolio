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

let currentProject = null;  
function showProject(project) {
    const details = {
        govtaid: "<h3>GovtAid</h3><p>A C# project working like a freelancing platform where users can access government-related services easily with broker assistance.</p><img src='image/7.png' style=' margin-left:5%;  vertical-align:top; '>",
        sms: "<h3>Student Management System</h3><p>A Java project for managing students of American International School.</p>",
        fixtureflow: "<h3>FixtureFlow</h3><p>A web-based tournament fixture generator with bye calculation and updated tables.</p><img src='image/5.png' style='width:700px;  vertical-align:top; '><img src='image/6.png' style='width:700px;  vertical-align:top;margin-left:30px;'>",
        robosoccer: "<h3>Robo Soccer</h3><p>Participated in JUSC National Science Festival 2024 and East West University Robo Fest with a soccer bot.</p><img src='image/1.jpg' style='width:700px;  vertical-align:top; '><img src='image/3.jpg' style='width:700px;  vertical-align:top;margin-left:30px;'>",
        footballbot: "<h3>Football Carrying Bot</h3><p>An RC car designed to carry footballs during matches.</p><img src='image/2.jpg' style='width:700px;  vertical-align:top;margin-left:30px;'><img src='image/4.jpg' style='width:700px;  vertical-align:top;margin-left:30px;'>",
        thiefdetector: "<h3>Thief Detector</h3><p>Arduino-based security system that detects intrusion and triggers alarm.</p>",
        waterlevel: "<h3>Water Level Indicator</h3><p>Created with transistor, buzzer, resistor, and LED to indicate tank water levels.</p>",
        agriconnect: "<h3>AgriConnect</h3><p>A software engineering course project connecting farmers with micro-entrepreneurs and consumers.</p>"
    };

    let detailsBox = document.getElementById("project-details");

    if (currentProject === project) {
        // If same project clicked again, hide details
        detailsBox.style.display = "none";
        currentProject = null;
    } else {
        // Show new project details
        detailsBox.innerHTML = details[project] || "<p>Project details not found.</p>";
        detailsBox.style.display = "block";
        currentProject = project;
    }
}
