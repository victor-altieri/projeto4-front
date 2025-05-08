// DECLARANDO O ARRAY DE IMAGENS

let imagens =[
    'src/assets/img1.jpg',
    'src/assets/img2.jpg',
    'src/assets/img3.jpg',
]

// DECLARANDO AS VARIÁVEIS

let i = 0;
let tempo = 3000;

//CRIANDO A FUNÇÃO SLIDESHOW

function slideShow(){
    document.getElementById("Image").src=imagens[i];
    i ++;

    if(i == imagens.length){
        i=0;
    }

    setTimeout("slideShow()", tempo)
}
slideShow();