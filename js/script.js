$(document).ready(function(){

  $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
  });

  $(window).on('scroll load', function(){

    $('#menu').removeClass('fa-times');
    $('#header').removeClass('toggle');
  });


});


// ==============================================================
                                        // 3D CARD


// PORTFOLIO ONCLICK 
document.getElementById('click').onclick = function(){
    Swal.fire({
        title: 'Example:',
        text: 'Please, click on the image to see the project!',
        imageUrl: 'img/powerBi.png',
        imageWidth: 300,
        imageHeight: 160,
        imageAlt: 'Custom image',
      })
}



const container = document.querySelector(".container");
const card = document.querySelector(".card");
const title = document.querySelector(".title");
const images = document.querySelector(".images");

const containerA = document.querySelector(".containerA");
const cardA = document.querySelector(".cardA");
const titleA = document.querySelector(".titleA");
const imagesA = document.querySelector(".imagesA");

const containerB = document.querySelector(".containerB");
const cardB = document.querySelector(".cardB");
const titleB = document.querySelector(".titleB");
const imagesB = document.querySelector(".imagesB");

const containerC = document.querySelector(".containerC");
const cardC = document.querySelector(".cardC");
const titleC = document.querySelector(".titleC");
const imagesC = document.querySelector(".imagesC");

const containerD = document.querySelector(".containerD");
const cardD = document.querySelector(".cardD");
const titleD = document.querySelector(".titleD");
const imagesD = document.querySelector(".imagesD");

const containerE = document.querySelector(".containerE");
const cardE = document.querySelector(".cardE");
const titleE = document.querySelector(".titleE");
const imagesE = document.querySelector(".imagesE");


//card raoate on mouse move
container.addEventListener("mousemove", (rotate) => {
    let x = (innerWidth / 2 - rotate.pageX) / 70;
    let y = (innerHeight / 2 - rotate.pageY) / 70;

    card.style.transform =`rotateY(${x}deg) rotateX(${y}deg)`;
});

containerA.addEventListener("mousemove", (rotate) => {
    let Ax = (innerWidth / 2 - rotate.pageX) / 70;
    let Ay = (innerHeight / 2 - rotate.pageY) / 70;

    cardA.style.transform =`rotateY(${Ax}deg) rotateX(${Ay}deg)`;
});

containerB.addEventListener("mousemove", (rotate) => {
    let Bx = (innerWidth / 2 - rotate.pageX) / 70;
    let By = (innerHeight / 2 - rotate.pageY) / 70;

    cardB.style.transform =`rotateY(${Bx}deg) rotateX(${By}deg)`;
});

containerC.addEventListener("mousemove", (rotate) => {
    let Cx = (innerWidth / 2 - rotate.pageX) / 50;
    let Cy = (innerHeight / 2 - rotate.pageY) / 50;

    cardC.style.transform =`rotateY(${Cx}deg) rotateX(${Cy}deg)`;
});

containerD.addEventListener("mousemove", (rotate) => {
    let Dx = (innerWidth / 2 - rotate.pageX) / 85;
    let Dy = (innerHeight / 2 - rotate.pageY) / 85;

    cardD.style.transform =`rotateY(${Dx}deg) rotateX(${Dy}deg)`;
});

containerE.addEventListener("mousemove", (rotate) => {
    let Ex = (innerWidth / 2 - rotate.pageX) / 50;
    let Ey = (innerHeight / 2 - rotate.pageY) / 50;

    cardE.style.transform =`rotateY(${Ex}deg) rotateX(${Ey}deg)`;
});


//card effects on mouse over the card
container.addEventListener("mouseover", ()=>{
    title.style.transform = "translate3d(0, 0, 160px)";
    images.style.transform = "translate3d(0, 0, 220px)";
    card.style.transition = " all 0.1s ease";
});

containerA.addEventListener("mouseover", ()=>{
    titleA.style.transform = "translate3d(0, 0, 160px)";
    imagesA.style.transform = "translate3d(0, 0, 220px)";
    cardA.style.transition = " all 0.1s ease";
});

containerB.addEventListener("mouseover", ()=>{
    titleB.style.transform = "translate3d(0, 0, 160px)";
    imagesB.style.transform = "translate3d(0, 0, 220px)";
    cardB.style.transition = " all 0.1s ease";
});

containerC.addEventListener("mouseover", ()=>{
    titleC.style.transform = "translate3d(0, 0, 160px)";
    imagesC.style.transform = "translate3d(0, 0, 220px)";
    cardC.style.transition = " all 0.1s ease";
});

containerD.addEventListener("mouseover", ()=>{
    titleD.style.transform = "translate3d(0, 0, 160px)";
    imagesD.style.transform = "translate3d(0, 0, 220px)";
    cardD.style.transition = " all 0.1s ease";
});

containerE.addEventListener("mouseover", ()=>{
    titleE.style.transform = "translate3d(0, 0, 160px)";
    imagesE.style.transform = "translate3d(0, 0, 220px)";
    cardE.style.transition = " all 0.1s ease";
});


//card back to normal when mouse out
container.addEventListener("mouseout", ()=>{
    card.style.transform =`rotateY(0deg) rotateX(0deg)`;
    card.style.transition = " all 0.5s ease";
    title.style.transform = "translate3d(0, 0, 0)";
    images.style.transform = "translate3d(0, 0, 0)"; 
});

containerA.addEventListener("mouseout", ()=>{
    cardA.style.transform =`rotateY(0deg) rotateX(0deg)`;
    cardA.style.transition = " all 0.5s ease";
    titleA.style.transform = "translate3d(0, 0, 0)";
    imagesA.style.transform = "translate3d(0, 0, 0)";
});

containerB.addEventListener("mouseout", ()=>{
    cardB.style.transform =`rotateY(0deg) rotateX(0deg)`;
    cardB.style.transition = " all 0.5s ease";
    titleB.style.transform = "translate3d(0, 0, 0)";
    imagesB.style.transform = "translate3d(0, 0, 0)"; 
});

containerC.addEventListener("mouseout", ()=>{
    cardC.style.transform =`rotateY(0deg) rotateX(0deg)`;
    cardC.style.transition = " all 0.5s ease";
    titleC.style.transform = "translate3d(0, 0, 0)";
    imagesC.style.transform = "translate3d(0, 0, 0)"; 
});

containerD.addEventListener("mouseout", ()=>{
    cardD.style.transform =`rotateY(0deg) rotateX(0deg)`;
    cardD.style.transition = " all 0.5s ease";
    titleD.style.transform = "translate3d(0, 0, 0)";
    imagesD.style.transform = "translate3d(0, 0, 0)"; 
});

containerE.addEventListener("mouseout", ()=>{
    cardE.style.transform =`rotateY(0deg) rotateX(0deg)`;
    cardE.style.transition = " all 0.5s ease";
    titleE.style.transform = "translate3d(0, 0, 0)";
    imagesE.style.transform = "translate3d(0, 0, 0)"; 
});

//======================================================================
                                    // JOGO DA VELHA

// inciar minhas variáveis

let board = ['','','','','','','','',''];
let playerTime = 0;
let gameOver = false;

let symbols = ['o', 'x'];

let winStates = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
]

function handleMove(postion){

  if(gameOver){
    return;
  }

  if(board[postion] == ''){ 
  board[postion] = symbols[playerTime];

  gameOver = isWin();
  
  if(gameOver == false){ 
  playerTime = (playerTime == 0) ? 1 : 0;
  
}
}
 return gameOver;
}
function isWin(){

for(let i =0; i<winStates.length; i++){
  let seq = winStates[i];
  let pos1 = seq[0];
  let pos2 = seq[1];
  let pos3 = seq[2];

  if(board[pos1] == board[pos2] &&
  board[pos1] == board[pos3] &&
  board[pos1] != '') {
  return true;
}
}
return false;
}

// ======================================================================
                                    // JANKEPON

var jogadorEscolha = 0;
var jogadorPontuacao = 0;
var computadorEscolha = 0;
var computadorPontuacao = 0;
var ganhador = -1;

function jogar(escolha){
jogadorEscolha = escolha;

computadorEscolha = Math.floor((Math.random() * (3 -1 +1))) + 1;

//1 - Pedra 
//2 - Papel
//3 - Tesoura
if((jogadorEscolha == 1) && (computadorEscolha == 1)){
ganhador = 0;

} else if((jogadorEscolha == 1) && (computadorEscolha == 2)){
    ganhador = 2;
    
} else if((jogadorEscolha == 1) && (computadorEscolha == 3)){
    ganhador = 1;
    
}else if((jogadorEscolha == 2) && (computadorEscolha == 1)){
    ganhador = 1;
    
  } else if((jogadorEscolha == 2) && (computadorEscolha == 2)){
    ganhador = 0;
    
  } else if((jogadorEscolha == 2) && (computadorEscolha == 3)){
    ganhador = 2;
    
  }else if((jogadorEscolha == 3) && (computadorEscolha == 1)){
    ganhador = 2;
    
  } else if((jogadorEscolha == 3) && (computadorEscolha == 2)){
    ganhador = 1;
    
  } else if((jogadorEscolha == 3) && (computadorEscolha == 3)){
        ganhador = 0;
  }

    document.getElementById('jogador-escolha-1').classList.remove('selecionado');
    document.getElementById('jogador-escolha-2').classList.remove('selecionado');
    document.getElementById('jogador-escolha-3').classList.remove('selecionado');
    document.getElementById('computador-escolha-1').classList.remove('selecionado');
    document.getElementById('computador-escolha-2').classList.remove('selecionado');
    document.getElementById('computador-escolha-3').classList.remove('selecionado');


    document.getElementById('jogador-escolha-' + jogadorEscolha).classList.add('selecionado');
    document.getElementById('computador-escolha-' + computadorEscolha).classList.add('selecionado');

  if(ganhador == 0) { 
    document.getElementById('mensagens').innerHTML = 'Empate';

  }else if(ganhador == 1) {
    document.getElementById('mensagens').innerHTML = 'Jogador ganhou';
    jogadorPontuacao++;

  }else if(ganhador == 2) {
    document.getElementById('mensagens').innerHTML = 'Computador ganhou';
    computadorPontuacao++;
  }

  document.getElementById('jogador-pontos').innerHTML = jogadorPontuacao;
  document.getElementById('computador-pontos').innerHTML = computadorPontuacao;

}

// ============================================================
                                        // CHANGING TEXT

const text = document.querySelector(".text");
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

const animation = anime.timeline({
    targets : '.text span',
    easing : 'easeInOutExpo',
    loop : true,
});

animation
.add({
    rotate : function(){
        return anime.random(-360,360)
    },
    translateX : function(){
        return anime.random(-250,250)
    },
    translateY : function(){
        return anime.random(-250,250)
    },
    duration : 5000,
    delay : anime.stagger(25),
})

.add({
    rotate : 0,
    translateX : 0,
    translateY : 0,
    duration : 5000,
    delay : anime.stagger(20),
})

// ==============================================================