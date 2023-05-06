const container = document.querySelector('.container');
/*const squareBox = document.createElement('div');
squareBox.setAttribute('class', 'squareBox');
container.appendChild(squareBox)*/


for (let i=1; i <= 256; i++) {
    //container.innerHTML += '<div class="square' + i + '"></div>';
    const square = document.createElement('div');
    square.setAttribute('class', 'square');
    container.appendChild(square);
}