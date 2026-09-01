// Avoiding Direct to Inspect Element, and View Source Code

document.oncontextmenu = () => {
    return false;
}

document.onkeydown = e => {
    if(e.key === 'F12' || e.ctrlKey && e.key === 'u'.toLowerCase()){
        return false;
    }

    if(e.ctrlKey && e.key === 'c'.toLowerCase() || e.ctrlKey && e.key === 'v'.toLowerCase()){
        return false;
    }
}

// Full Viewing the Image Since You Can't Right Click It

document.querySelectorAll('.achievement-card img, .project-card img').forEach(img => {
    img.addEventListener('click', () => {
        const absolutePath = `${window.location.origin}${img.getAttribute('src').replace('..','')}`;
        window.open(absolutePath, "_blank");
    })
});