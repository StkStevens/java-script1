/* Criando um slideshow automatico*/

//declarando as variaveis

let imagens = ["/img/carro1.jpg", "/img/carro2.jpg","/img/carro3.jpg"];
let index = 0;
let time = 3000;

function slideShow(){
    document.getElementById("imgbanner").src=imagens[index];
    index++;

    if(index == imagens.length){
        index=0;
    }
    setTimeout('slideShow()', time);
}
slideShow();

//Validação de login

function validar(){

    //declarando variaveis
    let usuario =document.getElementById("usuario").value;
    let senha =document.getElementById("senha").value;

    if(usuario ==="Admin" && senha ==="12345"){
        window.open("dashboard.html");
    }
    else{
        alert("usuario/senha invalidos");
    }
}