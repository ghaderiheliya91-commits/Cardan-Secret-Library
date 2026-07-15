function enterLibrary() {

    const welcome = document.getElementById("welcome");
    const library = document.getElementById("library");

    welcome.style.opacity = "0";

    setTimeout(function () {

        welcome.style.display = "none";

        library.style.display = "block";

        library.style.opacity = "0";

        setTimeout(function () {

            library.style.opacity = "1";

        }, 100);

    }, 800);

}
