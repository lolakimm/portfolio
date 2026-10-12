function updateDateTime() {
    let currentDate = new Date();

    let time = document.getElementById("current-time");
    let day = document.getElementById("current-day");

    time.innerHTML = currentDate.toLocaleTimeString();
    day.innerHTML = currentDate.toLocaleDateString();
}

updateDateTime();
setInterval(updateDateTime, 1000);

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
