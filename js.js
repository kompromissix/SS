const sd = document.querySelector('.background-2-1')
document.body.onscroll = function(e){
    sd.style.setProperty('--posY', `${window.scrollY - window.scrollY/2}px`)  
}