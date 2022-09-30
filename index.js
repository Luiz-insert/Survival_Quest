// Icones TOP
let heart = document.querySelector('.score1');
let temp = document.querySelector('.score2');
let watter = document.querySelector('.score3');
let food = document.querySelector('.score4');





// Pergunta, Card e Nome
let quest = document.querySelector('.cardQuest');
let card = document.getElementById('card')
let cardLeft = document.getElementById('cardLeft');
let cardRight = document.getElementById('cardRight');
let person = document.querySelector('.cardPerson');
let action = document.getElementById('action');





//Tela de inicio
let screen3 = document.getElementById('cCover');
let screen2 = document.getElementById('cSelection');
let screen1 = document.getElementById('cLoading');
screen3.style.display = 'none';
screen2.style.display = 'none';
screen1.onclick = function () {
    screen1.style.transition = transform  =1000 + 'ms';
    let countLight = 0;
    let offLight = screen1.style.opacity = countLight + '%'
    if (offLight == '0%') {
        countLight = 90;
        offLight = countLight + '%'
        screen1.style.display = 'none'
        screen2.style.display = 'block'
    }
    
}




//Tela de seleção de personagem
let person1 = document.getElementById('person1');
let person2 = document.getElementById('person2');
let person3 = document.getElementById('person3');
let person4 = document.getElementById('person4');
let personName = document.getElementById('personName');

person1.onmouseover = function () {
    personName.innerHTML = 'Yana Pysklevitz';
}
person2.onmouseover = function () {
    personName.innerHTML = 'Marcos';
    console.log('Marcos')
}
person3.onmouseover = function () {
    personName.innerHTML = 'Pedro';
    console.log('Pedro')
}
person4.onmouseover = function () {
    personName.innerHTML = 'João';
    console.log('João')
}
person1.onclick = function (){
    quest0();
    personYana();
    screen2.style.display = 'none';
    screen3.style.display = 'block';
}
person2.onclick = function (){
    quest0();
    personMarcos();
    screen2.style.display = 'none';
    screen3.style.display = 'block';
}
person3.onclick = function (){
    quest0();
    personPedro();
    screen2.style.display = 'none';
    screen3.style.display = 'block';
}
person4.onclick = function (){
    quest0();
    personJoao();
    screen2.style.display = 'none';
    screen3.style.display = 'block';
}



//Inicio do game


//Score Base
    scoreHeart = 0;
    scoreTemp = 25 + '°';
    scoreWatter = 0;
    scoreFood = 0; 

//Info Base 
    let survivor = document.getElementById('data1');
    let day = document.getElementById('data2');
    let biome = document.getElementById('data3');
    let skill = document.getElementById('data4');

    survivor.innerHTML = '';
    day.innerHTML = '';
    biome.innerHTML = '';
    skill.innerHTML = '';





