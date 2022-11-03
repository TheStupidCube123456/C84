canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;
var name = "";

img_x = 100;
img_y = 100;

function add(name) { // coloca uma imagem no canvas
    img_imgTag = new Image(); 
    img_imgTag.onload = uploadimg; 
    img_imgTag.src = img_image;   
    console.log(name);
}

function uploadimg() {

    ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if ((keyPressed >= 97 && keyPressed <= 122) || (keyPressed >= 65 && keyPressed <= 90)) // Checa se a tecla é uma tecla do alfabeto usando os valores ASCII
    {
        aplhabetkey(); // chama uma função
        document.getElementById("d1").innerHTML = "Você pressionou uma tecla alfabeto"; // mostra no HTML que você pressionou uma teclad do alfabeto
    }
	else 
    {
        otherkey(); // chama uma função
        document.getElementById("d1").innerHTML = "Você pressionou uma tecla sem classificação"; // mostra no HTML que você pressionou uma tecla sem classificação
    }
}

function aplhabetkey() {
    img_image = "alfabeto.png"; // define a imagem que será colocada no canvas
    add("alfabeto"); // chama a função que coloca a imagem no canvas
}

function numberkey() {
    img_image = "número.png"; // define a imagem que será colocada no canvas
    add(); // chama a função que coloca a imagem no canvas
}

function arrowkey() {
    img_image = "direcional.png"; // define a imagem que será colocada no canvas
    add(); // chama a função que coloca a imagem no canvas
}

function specialkey() {
    img_image = "especial.png"; // define a imagem que será colocada no canvas
    add(); // chama a função que coloca a imagem no canvas
}

function otherkey() {
    img_image = "outras.png";
    add("sem classificação");
}