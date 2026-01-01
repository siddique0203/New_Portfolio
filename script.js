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
        govtaid: `
            <h3>GovtAid</h3>
            <p>Engineered a freelancing-like platform in C# to facilitate user access to government services via brokers. Deployed features like authentication, broker management, and role-based access.</p>
            <img src='image/7.png' style='margin-left:5%; vertical-align:top;'>
            <p>🔗 <a href="https://github.com/siddique0203/C-Sharp" target="_blank">GitHub Repository</a></p>
            `,

        sms: `
            <h3>Student Management System</h3>
            <p>Java desktop application for managing student information. Includes registration, grade tracking, record management, persistent file handling, and a user-friendly GUI.</p>
            <p>🔗 <a href="https://github.com/siddique0203/Student-Management-System" target="_blank">GitHub Repository</a></p>
            `,

        fixtureflow: `
            <h3>FixtureFlow</h3>
            <p>Python-based tournament fixture generator used in AIUB GAMES-2024 with 3,000 participants. Automatically calculates total matches, byes, and scheduled rounds for multiple sports categories.</p>
            <img src='image/5.png' style='width:700px; vertical-align:top;'>
            <img src='image/6.png' style='width:700px; vertical-align:top; margin-left:30px;'>
        `,

        robosoccer: `
            <h3>Robo Soccer</h3>
            <p>Participated in JUSC National Science Festival 2024 and East West University Robo Fest with a soccer bot.</p>
            <img src='image/1.jpg' style='width:700px; vertical-align:top;'>
            <img src='image/3.jpg' style='width:700px; vertical-align:top; margin-left:30px;'>
        `,

        footballbot: `
            <h3>Football Carrying Bot</h3>
            <p>An RC car designed to carry footballs during matches.</p>
            <img src='image/2.jpg' style='width:700px; vertical-align:top; margin-left:30px;'>
            <img src='image/4.jpg' style='width:700px; vertical-align:top; margin-left:30px;'>
        `,

        thiefdetector: `
            <h3>Thief Detector</h3>
            <p>Arduino-based security system that detects intrusion and triggers alarms.</p>
        `,

        waterlevel: `
            <h3>Water Level Indicator</h3>
            <p>Created with transistor, buzzer, resistor, and LED to indicate tank water levels.</p>
            
            `,

        agriconnect: `
            <h3>AgriConnect</h3>
            <p>Web platform connecting farmers with suppliers and buyers. Built using HTML, CSS, JavaScript, PHP, and MySQLi. Backend database stores users, products, and transactions with full CRUD operations.</p>
            <p>🔗 <a href="https://github.com/siddique0203/AgriConnect" target="_blank">GitHub Repository</a></p>
            `,

        crafty: `
            <h3>Crafty (SRS Project)</h3>
            <p>Comprehensive Software Requirement Specification document. Created using UML, Draw.io, MS Word, and Jira. Includes requirement elicitation, use case diagrams, and functional/non-functional specifications.</p>
            <p>🔗 <a href="https://github.com/siddique0203/SRS_of_Crafty" target="_blank">GitHub Repository</a></p>
            `,

        dbproject: `
            <h3>MySQL Database Project</h3>
            <p>Database design project using Oracle SQL. Designed normalized schemas, applied CRUD operations, executed complex queries, joins, and indexing for efficient data retrieval and reporting.</p>
            <p>🔗 <a href="https://github.com/siddique0203/DataBase" target="_blank">GitHub Repository</a></p>
            `
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
