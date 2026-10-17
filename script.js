function updateDateTime() {
    let currentDate = new Date();

    let time = document.getElementById("current-time");
    let day = document.getElementById("current-day");

    time.innerHTML = currentDate.toLocaleTimeString();
    day.innerHTML = currentDate.toLocaleDateString();
}

updateDateTime();
setInterval(updateDateTime, 1000);

// place most recent windows above less recent ones
let topZ = 1000;

function bringToFront(popup) {
    popup.style.zIndex = ++topZ;
    updateActiveTab();
}

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

    popup.addEventListener('pointerdown', () => bringToFront(popup));
}

document.querySelectorAll('.popup-container').forEach(makeDraggable);

function addTab(id) {
    // check if tab is already open
    if (document.getElementById("tab-" + id)) return;

    const popup = document.getElementById(id);
    const title = popup.querySelector(".popup-banner h1").textContent;

    const tab = document.createElement("button");
    tab.id = "tab-" + id;
    tab.className = "taskbar-tab";
    tab.textContent = title;
    tab.onclick = () => bringToFront(popup);

    document.getElementById("taskbar-tabs").appendChild(tab);
}

function removeTab(id) {
    const tab = document.getElementById("tab-" + id);
    if (tab) tab.remove();
}

function updateActiveTab() {
    let top = null;
    document.querySelectorAll('.popup-container.open-popup').forEach(p => {
        if (!top || Number(p.style.zIndex) > Number(top.style.zIndex)) top = p;
    });

    document.querySelectorAll('.taskbar-tab').forEach(tab => {
        tab.classList.toggle('active', top && tab.id === 'tab-' + top.id);
    });
}

function openPopup(id) {
    const popup = document.getElementById(id);
    popup.classList.add("open-popup");
    addTab(id);
    bringToFront(popup);
}

function closePopup(id) {
    const popup = document.getElementById(id);
    popup.classList.remove("open-popup");
    removeTab(id);
    updateActiveTab();
}