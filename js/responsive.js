function actualizarimagen1() {
    const imagen= document.getElementById('responsive-img1')
    const imagen2= document.getElementById('responsive-img2')
    const imagen3= document.getElementById('responsive-img3')
    const imagen4= document.getElementById('responsive-img4')
    const imagen5= document.getElementById('responsive-img5')
    const imagen6= document.getElementById('responsive-img6')
    const width = window.innerWidth;
    if (width <= 600) {
        imagen.src = 'images/res/rescel1.jpg';
    } else if (width > 600 && width <= 1024) {
        imagen.src = 'images/res/restab1.jpg';
    } else {
        imagen.src = 'images/1.png';
    }


    if (width <= 600) {
        imagen2.src = 'images/res/rescel2.jpg';
    } else if (width > 600 && width <= 1024) {
        imagen2.src = 'images/res/restab2.jpg';
    } else {
        imagen2.src = 'images/2.png';
    }


    if (width <= 600) {
        imagen3.src = 'images/res/rescel3.jpg';
    } else if (width > 600 && width <= 1024) {
        imagen3.src = 'images/res/restab3.jpg';
    } else {
        imagen3.src = 'images/3.png';
    }


    if (width <= 600) {
        imagen4.src = 'images/res/rescel4.jpg';
    } else if (width > 600 && width <= 1024) {
        imagen4.src = 'images/res/restab4.jpg';
    } else {
        imagen4.src = 'images/4.png';
    }


    if (width <= 600) {
        imagen5.src = 'images/res/rescel5.jpg';
    } else if (width > 600 && width <= 1024) {
        imagen5.src = 'images/res/restab5.jpg';
    } else {
        imagen5.src = 'images/5.png';
    }


    if (width <= 600) {
        imagen6.src = 'images/res/rescel6.jpg';
    } else if (width > 600 && width <= 1024) {
        imagen6.src = 'images/res/restab6.jpg';
    } else {
        imagen6.src = 'images/6.png';
    }
}


window.onload = actualizarimagen1;
window.onresize = actualizarimagen1;