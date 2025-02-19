function getRandomRGB() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

document.body.addEventListener("click", function(event) {
    if (!event.target.closest("#changeTitle")) {
        document.body.style.backgroundColor = getRandomRGB();
    }
});
