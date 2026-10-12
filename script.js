function updateDateTime() {
    let currentDate = new Date();

    let time = document.getElementById("current-time");
    let day = document.getElementById("current-day");

    time.innerHTML = currentDate.toLocaleTimeString();
    day.innerHTML = currentDate.toLocaleDateString();
}

function openAboutMePopup() {
    let popup = document.getElementById("about-me-popup");

    popup.classList.add("open-popup");
}

function closeAboutMePopup() {
    let popup = document.getElementById("about-me-popup");

    popup.classList.remove("open-popup");
}

updateDateTime();
setInterval(updateDateTime, 1000);

function aboutMePopup() {
    
}