let oabsolut = document.getElementById("open")

let cabsolut = document.getElementById("close")

let absolut = document.getElementById("burgermenu")

const sd = document.querySelector('.background-2-1')
document.body.onscroll = function(e){
    sd.style.setProperty('--posY', `${window.scrollY - window.scrollY/2}px`)  
}

oabsolut.onclick = function() {
    absolut.style.visibility = "visible";
    absolut.style.opacity = "100";
    absolut.style.width = "100%";
    absolut.style.left = "0%";
    absolut.style.position = "fixed";
    absolut.style.display = "flex";
}

cabsolut.onclick = function() {
    absolut.style.visibility = "hidden";
    absolut.style.right = "25%";
    absolut.style.display = "none";
}