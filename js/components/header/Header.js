function header() {
    const hamburger = document.querySelector('.hamburger')
    const close = document.querySelector('.sidebarClose')
    let isSidebarVisible = false;
    const sidebarOverlay = document.querySelector('.sidebarOverlay')
    hamburger.addEventListener('click', () => {
        toggleSidebar(isSidebarVisible)
        isSidebarVisible = !isSidebarVisible;
        hamburger.style.display = 'none';
        close.style.display = 'block';
        sidebarOverlay.style.display = 'block';

    })
    close.addEventListener('click', () => {
        toggleSidebar(isSidebarVisible)
        isSidebarVisible = !isSidebarVisible;
        hamburger.style.display = 'block';
        close.style.display = 'none';
        sidebarOverlay.style.display = 'none';
    })


}

function toggleSidebar(isVisible) {
    const headerSidebar = document.getElementById('headerSidebar');
    if (isVisible) {
        headerSidebar.style.width = "0";
    }
    else {
        headerSidebar.style.width = "250px";
    }
}



export { header }