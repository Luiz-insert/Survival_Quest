
//Status 


//Animaçoes de transição dos cards

function stockBackground() {
    card.style.backgroundSize = 'cover';
    card.style.backgroundRepeat = 'no-repeat'
    card.style.backgroundPositionX = 'center';
}
function stockLeftCard() {
    card.style.transition = '0.200s';
    card.style.transform = 'translate(-1em, 0em)';
    card.style.rotate = '-0.9deg';
    card.style.backgroundPositionX = '0%';
}
function stockRightCard() {
    card.style.transition = '0.200s';
    card.style.transform = 'translate(1em, 0em)';
    card.style.rotate = '0.9deg';
    card.style.backgroundPositionX = '100%';
}
function centerCard() {
    card.style.transition = '0.200s';
    card.style.transform = 'translate(0em, 0px)';
    card.style.rotate = '0deg';
    card.style.backgroundPositionX = '50%';
}


//Questão 0 (Inicial)

 function quest0() {
    quest.innerHTML = 'Voce não se lembra de muita coisa... Levanta e começa a olhar em volta';
    day.innerHTML = 'Dia' +  ' ' + 1;
    biome.innerHTML = 'Floresta';
    skill.innerHTML = '';
    card.style.backgroundImage = 'url(./q1.jpg)';
    stockBackground();
    card.ontouchmove = function (event) {
        var x = event.touches[0].clientX;
        if (x < 140) {
            stockLeftCard();
            action.innerHTML = 'Esquerda';
            card.ontouchend = function () {
                quest11();
                centerCard();
                    action.innerHTML ='';
            }
        }
        if (x > 140) {
            stockRightCard();
            action.innerHTML = 'Direita';
            card.ontouchend = function () {
                quest12();
                centerCard();
                    action.innerHTML ='';
            }
        }
    }
}

//Questão 1 para 1

function quest11() {
    quest.innerHTML = 'Voce segue adentro de uma mata fechada, e os passaros se silenciam de forma suspeita';
    day.innerHTML = 'Dia' +  ' ' + 1;
    biome.innerHTML = 'Floresta';
    skill.innerHTML = '';
    card.style.backgroundImage = 'url(./q0.jpg)';
    stockBackground();
    card.ontouchmove = function (event) {
        var x = event.touches[0].clientX;
        if (x < 140) {
            stockLeftCard();
            action.innerHTML = '*Prosseguir em silecio';
            card.style.rotate = '-2deg';
            card.ontouchend = function () {
                centerCard();
                    action.innerHTML ='';
            }
        }
        if (x > 140) {
            stockRightCard();
            action.innerHTML = 'Começar a correr!';
            card.style.rotate = '2deg';
            card.ontouchend = function () {
                centerCard();
                    action.innerHTML ='';
            }
        }
    }
}

//Questão 1 para 2

function quest12() {
    quest.innerHTML = 'Voce se desvia a uma caverna e de forma suspeita';
    day.innerHTML = 'Dia' +  ' ' + 1;
    biome.innerHTML = 'Floresta';
    skill.innerHTML = '';
    card.style.backgroundImage = 'url(./q2.webp)';
    stockBackground();
    card.ontouchmove = function (event) {
        var x = event.touches[0].clientX;
        if (x < 140) {
            stockLeftCard();
            action.innerHTML = 'Estranho... Tem uma pessoa,  ';
            card.style.rotate = '-2deg';
            card.ontouchend = function () {
                centerCard();
                    action.innerHTML ='';
            }
        }
        if (x > 140) {
            stockRightCard();
            action.innerHTML = 'Começar a correr!';
            card.style.rotate = '2deg';
            card.ontouchend = function () {
                centerCard();
                    action.innerHTML ='';
            }
        }
    }
}

//Questão 2 para 1

function quest21() {
    
}


//Personagens
function personYana () {
    survivor.innerHTML = 'Yana Pysklevitz';
    scoreHeart = 12;
    scoreTemp;
    scoreWatter = 100;
    scoreFood = 70;  
    heart.innerHTML = scoreHeart;
    temp.innerHTML = scoreTemp;
    watter.innerHTML = scoreWatter;
    food.innerHTML = scoreFood;

}
function personMarcos () {
    survivor.innerHTML = 'Marcos';
    scoreHeart = 8;
    scoreTemp;
    scoreWatter = 70;
    scoreFood = 100;
    heart.innerHTML = scoreHeart;
    temp.innerHTML = scoreTemp;
    watter.innerHTML = scoreWatter;
    food.innerHTML = scoreFood;
}
function personPedro () {
    survivor.innerHTML = 'Pedro';
    scoreHeart = 10;
    scoreTemp;
    scoreWatter = 70;
    scoreFood = 70;
    heart.innerHTML = scoreHeart;
    temp.innerHTML = scoreTemp;
    watter.innerHTML = scoreWatter;
    food.innerHTML = scoreFood;
}
function personJoao () {
    survivor.innerHTML = 'João';
    scoreHeart = 10;
    scoreTemp;
    scoreWatter = 70;
    scoreFood = 70;
    heart.innerHTML = scoreHeart;
    temp.innerHTML = scoreTemp;
    watter.innerHTML = scoreWatter;
    food.innerHTML = scoreFood;
}