function updateDateTime() {
    let currentDate = new Date();

    let time = document.getElementById("current-time");
    let day = document.getElementById("current-day");

    time.innerHTML = currentDate.toLocaleTimeString();
    day.innerHTML = currentDate.toLocaleDateString();
}

updateDateTime();
setInterval(updateDateTime, 1000);

function makeDraggable(popup) {
    const bar = popup.querySelector('.popup-banner');
    const topBar = document.querySelector('.top-banner');
    const bottomBar = document.querySelector('.bottom-banner');
    let x = 0, y = 0;

    bar.addEventListener('pointerdown', (e) => {
        if (e.target.closest('button')) return;
        bar.setPointerCapture(e.pointerId);

        // restrict window movement to screen size (within top and bottom banners)
        bar.onpointermove = (e) => {
            const r = popup.getBoundingClientRect();

            const minTop = topBar.offsetHeight;
            const maxBottom = window.innerHeight - bottomBar.offsetHeight;

            const dx = Math.min(Math.max(e.movementX, -r.left), window.innerWidth - r.right);
            const dy = Math.min(Math.max(e.movementY, minTop - r.top), maxBottom - r.bottom);
            
            x += dx;
            y += dy;
            popup.style.translate = `${x}px ${y}px`;
        };
    });

    bar.addEventListener('pointerup', () => {
        bar.onpointermove = null;
    });
}

document.querySelectorAll('.popup-container').forEach(makeDraggable);

function openAboutMePopup() {
    let popup = document.getElementById("about-me-popup");
    popup.classList.add("open-popup");
}

function closeAboutMePopup() {
    let popup = document.getElementById("about-me-popup");
    popup.classList.remove("open-popup");
}

function openContactLinksPopup() {
    let popup = document.getElementById("contact-links-popup");
    popup.classList.add("open-popup");
}

function closeContactLinksPopup() {
    let popup = document.getElementById("contact-links-popup");
    popup.classList.remove("open-popup");
}

function openProjectsPopup() {
    let popup = document.getElementById("projects-popup");
    popup.classList.add("open-popup");
}

function closeProjectsPopup() {
    let popup = document.getElementById("projects-popup");
    popup.classList.remove("open-popup");
}

function openSkillsPopup() {
    let popup = document.getElementById("skills-popup");
    popup.classList.add("open-popup")
}

function closeSkillsPopup() {
    let popup = document.getElementById("skills-popup");
    popup.classList.remove("open-popup");
}

function openGithubPopup() {
    let popup = document.getElementById("github-popup");
    popup.classList.add("open-popup");
}

function closeGithubPopup() {
    let popup = document.getElementById("github-popup");
    popup.classList.remove("open-popup");
}

function openLinkedInPopup() {
    let popup = document.getElementById("linkedin-popup");
    popup.classList.add("open-popup");
}

function closeLinkedInPopup() {
    let popup = document.getElementById("linkedin-popup");
    popup.classList.remove("open-popup");
}