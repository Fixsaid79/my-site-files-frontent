function showPhoto(number) {
    const photo = document.getElementById("photo");
    
    photo.classList.remove("show");

    setTimeout(() => {
        photo.src = "img" + number + ".png";
        photo.classList.add("show");
    }, 200);
}