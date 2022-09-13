
//Status 
let dir = 0;
//Animaçoes de transição dos cards
function stockBackground() {
    card.style.backgroundSize = 'cover';
    card.style.backgroundRepeat = 'no-repeat'
    card.style.backgroundPositionX = 'center';
}
function stockLeftCard() {
    let movLeft = 16;
    card.style.transition = '0.200s';
    card.style.transform = 'translate(-1em, 0em)';
    card.style.backgroundPositionX = '0%';
}
function stockRightCard() {
    let movRigth = -16;
    card.style.transition = '0.200s';
    card.style.transform = 'translate(1em, 0em)';
    card.style.backgroundPositionX = '100%';
}
function centerCard() {
        card.style.transition = '0.200s';
        card.style.transform = 'translate(0em, 0px)';
        card.style.backgroundPositionX = '50%';
}

//Quests
//function quest0(alternative)

 function quest0() {
    quest.innerHTML = 'Voce não se lembra de muita coisa... Levanta e começa a olhar em volta';
    day.innerHTML = 'Dia' +  ' ' + 1;
    biome.innerHTML = 'Floresta';
    skill.innerHTML = ''
    card.style.backgroundImage = 'url(./q1.jpg)';
    stockBackground();
    
    
    card.ontouchmove = function (event) {
        var x = event.touches[0].clientX;
        if (x < 140) {
            stockLeftCard();
            action.innerHTML = 'Esquerda';
            card.ontouchend = function (event) {
                if (x > 100) {
                    centerCard();
                    action.innerHTML ='';
                }
                
            }
        }
        if (x > 140) {
            stockRightCard();
            action.innerHTML = 'Direita';
            card.ontouchend = function (event) {
                if (x < 180) {
                    centerCard();
                    action.innerHTML ='';
                }
                
            }
        }
    }
}

    

//Quest 01
function quest1 () {
    quest.innerHTML = 'Voce segue adentro de uma mata fechada, e os passaros se silenciam de forma suspeita';
    card.style.backgroundImage = 'url(./q0.jpg)';
    stockBackground();
    card.onmouseout = function () {
        centerCard();
        card.style.rotate = '0deg';
        action.innerHTML =''
    }
    cardLeft.onmouseover = function () {
        card.style.transform = 'translate(-1em, 0px)';
        card.style.rotate = '-2deg';
        action.innerHTML = '*Prosseguir em silecio';
        dir = 1;

    }
    cardRight.onmouseover = function () {
        card.style.transform = 'translate(1em, 0px)';
        card.style.rotate = '2deg';
        action.innerHTML = 'Começar a correr!';
        dir = 2;

    }

}
//Caminhos


//Personagens
function personLuiz () {
    survivor.innerHTML = 'Luiz Gusttavo';
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