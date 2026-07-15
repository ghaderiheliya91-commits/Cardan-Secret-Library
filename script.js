document.querySelector("button").addEventListener("click", function(){

    document.getElementById("library").style.display = "block";

    this.style.display = "none";

});


function showBook(number){

    let page = document.getElementById("bookPage");

    page.style.display = "block";

    if(number==1){

        page.innerHTML="<h2>The Forgotten Story</h2><p>A forgotten tale hidden in the darkness...</p>";

    }

    if(number==2){

        page.innerHTML="<h2>The Last Page</h2><p>The ending nobody was supposed to read...</p>";

    }

    if(number==3){

        page.innerHTML="<h2>Secrets Between Stars</h2><p>Every star hides a secret...</p>";

    }

}
