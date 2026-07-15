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
const stars = document.getElementById("stars");

for(let i=0;i<120;i++){

    const star=document.createElement("div");

    star.classList.add("star");

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.animationDelay=Math.random()*2+"s";

    stars.appendChild(star);

}
const topBtn = document.getElementById("topBtn");

window.onscroll = function(){

    if(document.documentElement.scrollTop > 200){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

}

function topFunction(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}
const stars = document.getElementById("stars");

for(let i = 0; i < 100; i++){

    let star = document.createElement("div");

    star.className = "star";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.animationDelay = Math.random() * 3 + "s";

    stars.appendChild(star);

}
