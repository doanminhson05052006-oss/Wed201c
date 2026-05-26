function upDate(previewPic){

    console.log("Mouse over or focus event triggered");

    let imageDiv = document.getElementById("image");

    let imageSource = previewPic.querySelector("img").src;

    let imageAlt = previewPic.querySelector("img").alt;

    imageDiv.style.backgroundImage = "url('" + imageSource + "')";

    imageDiv.innerHTML = imageAlt;
}

function unDo(){

    console.log("Mouse leave or blur event triggered");

    let imageDiv = document.getElementById("image");

    imageDiv.style.backgroundImage = "url('')";

    imageDiv.innerHTML = "Hover over or focus on an image to display details.";
}

function addTabFocus(){

    console.log("Page loaded");

    let figures = document.querySelectorAll(".preview");

    for(let i = 0; i < figures.length; i++){

        figures[i].setAttribute("tabindex", "0");

        console.log("Tabindex added to image " + (i + 1));
    }
}