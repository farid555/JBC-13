


const inputElm = document.querySelector('#input');
const formElm = document.querySelector('form');
const winScoreEle = document.querySelector('.winScore')
const p1BtnElm = document.querySelector('.p1Btn');
const p2BtnElm = document.querySelector('.p2Btn');
const p1ScoreElm = document.querySelector('.p1Score');
const p2ScoreElm = document.querySelector('.p2Score');
const resetBtnElm = document.querySelector('.reset');
const invalidInput = document.querySelector('.invalid-input')


let winScore = 20;
let p1Score = 0;
let p2Score = 0;
let turn = 'player1';

winScoreEle.textContent = winScore;
p1ScoreElm.textContent = p1Score;
p2ScoreElm.textContent = p2Score;



formElm.addEventListener('submit', function (e) {
    e.preventDefault();

    let inputValue = Number(inputElm.value);

    if (inputValue === '' || inputValue < 1) {
        if (invalidInput) {
            formElm.insertAdjacentHTML(
                'beforeBegin',
                '<p class="invalid-input">Please input valid Number... </p>'
            )
        }
    } else {
        if (invalidInput) {
            invalidInput.remove();
        }
    }

    winScore = inputValue;
    winScoreEle.textContent = winScore;
    inputElm.value = '';
    intialPlayState();

})


p1BtnElm.addEventListener('click', function (e) {

    if (turn === 'player1') {
        p1Score++
        p1ScoreElm.textContent = p1Score;
        console.log(p1Score);
        turn = 'player2';
        p1BtnElm.setAttribute('disabled', 'disabled');
        p2BtnElm.removeAttribute('disabled');
        checkWiner();
    }

})

function checkWiner() {

    const isP1Winer = winScore === p1Score;
    const isP2Winer = winScore === p2Score;

    if (isP1Winer || isP2Winer) {
        p1BtnElm.setAttribute('disabled', 'disabled');
        p2BtnElm.setAttribute('disabled', 'disabled');
    }
    displayWiner(isP1Winer, isP2Winer);
}


function displayWiner(p1, p2) {
    if (p1) {
        formElm.insertAdjacentHTML('beforeBegin', '<p>Player-1 is Winner </p>');
    } else if (p2) {
        formElm.insertAdjacentHTML('beforeBegin', '<p>Player-2 is Winner </p>');
    }
}

p2BtnElm.addEventListener('click', function (e) {

    if (turn === 'player2') {
        p2Score++
        p2ScoreElm.textContent = p2Score;
        turn = 'player1';
        p2BtnElm.setAttribute('disabled', 'disabled');
        p1BtnElm.removeAttribute('disabled');

    }

})

resetBtnElm.addEventListener('click', function (e) {
    winScore = 20;
    intialPlayState();
    console.log(winScore);



})

function intialPlayState() {

    p1Score = 0;
    p2Score = 0;
    turn = 'player1';
    winScoreEle.textContent = winScore;
    p1ScoreElm.textContent = p1Score;
    p2ScoreElm.textContent = p2Score;
    p1BtnElm.removeAttribute('disabled');
    p2BtnElm.removeAttribute('disabled');

}