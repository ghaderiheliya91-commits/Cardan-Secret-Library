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

/* Stars */

const stars = document.getElementById("stars");

for (let i = 0; i < 120; i++) {

    const star = document.createElement("div");

    star.classList.add("star");

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.animationDelay = Math.random() * 3 + "s";

    stars.appendChild(star);

}

/* Back To Top */

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.documentElement.scrollTop > 200) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

}

function topFunction() {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

}
function openBook(){

    const password = prompt("🔒 Enter the password");

    if(password === "shadowfire"){

        window.location.href = "my-beautiful-fire.html";

    }else if(password === null){

        return;

    }else{

        alert("❌ Wrong password");

    }

}
