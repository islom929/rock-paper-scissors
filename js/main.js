var main = document.querySelector(".main");
var elRusultBall = main.querySelector(".js-result-ball");
var hero = document.querySelector(".hero");
//  CHOICE
var elChoice = hero.querySelector(".choice");
var elChoiceBox = elChoice.querySelector(".choice__box");
var elItemPaper = elChoice.querySelector(".item-paper");
var elItemScissors = elChoice.querySelector(".item-scissors");
var elItemRock = elChoice.querySelector(".item-rock");
var elChoiceButtons = elChoice.querySelectorAll(".choice__button");
// var elBtnPaper = elChoice.querySelector(".choice__button--paper");
var elResultText = document.querySelector('.js-result-ball');
var elBtnScissors = elChoice.querySelector(".choice__button--scissors");
var elBtnRock = elChoice.querySelector(".choice__button--rock");
//  ACTIVE
var elAcitve = hero.querySelector(".section--active");
var elAgainBtn = elAcitve.querySelector(".again");
var elResult = elAcitve.querySelector(".result");
var elMyPickImg = elAcitve.querySelector(".picked__img");
var elPickImg = elAcitve.querySelector(".random__img");
var elRulesBtn = main.querySelector(".btn-rules");
var elRandomm = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
var array = [];
var btnBox = document.querySelector(".button__box")
// hero.addEventListener("click" , function(){

//     elChoice.classList.add("d-none");
//     elAcitve.classList.remove("d-none");

//     array.push(elChoiceButtons);
//   })

var count = 0

// elItemPaper.addEventListener('click' , function(){

  elItemPaper.querySelector(".choice__button--paper").onclick = function(){

    var elPaperMyImg = document.createElement('img');
    elPaperMyImg.src = '../img/img-qogoz.svg';
    elMyPickImg.appendChild(elPaperMyImg);

    elChoice.classList.add("d-none");
    elAcitve.classList.remove("d-none");
    var elRandom = elRandomm(1,4)

    if(elRandom === 1){
      var elPaperImg = document.createElement('img');
      elPaperImg.src = '../img/img-qogoz.svg';
      elPickImg.appendChild(elPaperImg);
      elResult.textContent = 'SAME';
    }else if(elRandom === 2){
      var elScissorsImg = document.createElement('img');
      elScissorsImg.src = '../img/img-qaychi.svg';
      elPickImg.appendChild(elScissorsImg);
      elResult.textContent = 'YOU LOSE';
    }else if(elRandom === 3){
      var elRockImg = document.createElement('img');
      elRockImg.src = '../img/img-tosh.svg';
      elPickImg.appendChild(elRockImg);
      elResult.textContent = 'YOU WIN';
      count++;
      elResultText.textContent = count;
      // score++;
      // elnatija.textContent = score
    }
  };

// elItemScissors.addEventListener('click' , function(){

elItemScissors.querySelector(".choice__button--scissors").onclick = function(){

  var elScissorsMyImg = document.createElement('img');
  elScissorsMyImg.src = '../img/img-qaychi.svg';
  elMyPickImg.appendChild(elScissorsMyImg);

  elChoice.classList.add("d-none");
  elAcitve.classList.remove("d-none");
  var elRandom = elRandomm(1,4)

  if(elRandom === 1){
    var elPaperImg = document.createElement('img');
    elPaperImg.src = '../img/img-qogoz.svg';
    elPickImg.appendChild(elPaperImg);
    elResult.textContent = 'YOU WIN'
    count++;
    elResultText.textContent = count;
  }else if(elRandom === 2){
    var elScissorsImg = document.createElement('img');
    elScissorsImg.src = '../img/img-qaychi.svg';
    elPickImg.appendChild(elScissorsImg);
    elResult.textContent = 'SAME'
  }else if(elRandom === 3){
    var elRockImg = document.createElement('img');
    elRockImg.src = '../img/img-tosh.svg';
    elPickImg.appendChild(elRockImg);
    elResult.textContent = 'YOU LOSE'
  }
}

// elItemRock.addEventListener('click' , function(){

elItemRock.querySelector(".choice__button--rock").onclick = function(){

  var elRockMyImg = document.createElement('img');
  elRockMyImg.src = '../img/img-tosh.svg';
  elMyPickImg.appendChild(elRockMyImg);

    elChoice.classList.add("d-none");
    elAcitve.classList.remove("d-none");
    var elRandom = elRandomm(1,4)

  if(elRandom === 1){
    var elPaperImg = document.createElement('img');
    elPaperImg.src = '../img/img-qogoz.svg';
    elPickImg.appendChild(elPaperImg);
    elResult.textContent = 'YOU LOSE'
  }else if(elRandom === 2){
    var elScissorsImg = document.createElement('img');
    elScissorsImg.src = '../img/img-qaychi.svg';
    elPickImg.appendChild(elScissorsImg);
    elResult.textContent = 'YOU WIN'
    count++;
    elResultText.textContent = count;
  }else if(elRandom === 3){
    var elRockImg = document.createElement('img');
    elRockImg.src = '../img/img-tosh.svg';
    elPickImg.appendChild(elRockImg);
    elResult.textContent = 'SAME'
  }
}


btnBox.querySelector(".again").onclick = function(){
  elPickImg.innerHTML ='';
  elMyPickImg.innerHTML = '';
  elChoice.classList.remove("d-none");
  elAcitve.classList.add("d-none");
}

  // if(random === 1){
  //   var elPaperImg = elPickImg.createElement('img');
  //   elPaperImg.src = '../img/img-qogoz.svg';
  // }else if(random === 2){
  //   var elScissorsImg = elPickImg.createElement('img');
  //   elScissorsImg.src = '../img/img-qaychi.svg';
  // }else if(random === 3){
  //   var elRockImg = elPickImg.createElement('img');
  //   elRockImg.src = '../img/img-tosh.svg';
  //
