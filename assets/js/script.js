<<<<<<< HEAD
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

document.querySelectorAll('.achievement-card img, .project-card img').forEach(img => {
    img.addEventListener('click', () => {
        window.open(img.src, "_blank");
    })
=======
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

document.querySelectorAll('.achievement-card img, .project-card img').forEach(img => {
    img.addEventListener('click', () => {
        window.open(img.src, "_blank");
    })
>>>>>>> my-temporary-fix
});