//-Add the main divs with DOM:
const container = document.querySelector('#container');

const button = document.createElement('div');
button.setAttribute('id', 'button');
document.body.insertBefore(button, container);
const btnRandom = document.createElement('button');
btnRandom.setAttribute('class', 'btnRandom');
btnRandom.textContent='RANDOM COLOR GRID';
button.appendChild(btnRandom);
const btn = document.createElement('button');
btn.setAttribute('class', 'btn');
btn.textContent='CHANGE THE GRID';
button.appendChild(btn);
const btnGradient = document.createElement('button');
btnGradient.setAttribute('class', 'btnGradient');
btnGradient.textContent='BLACK GRADIENT GRID';
button.appendChild(btnGradient);
const header = document.createElement('h1');
document.body.insertBefore(header, button);
header.textContent='Etch-A-Sketch';

//-The "default" 16x16 grid:
for (let i=1; i <= 256; i++) {
    const square = document.createElement('div');
    square.setAttribute('class', 'square');
    container.appendChild(square);
    container.style.gridTemplateColumns='repeat(16, 1fr)'
};

container.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor='black'
    ;
});


//-Button to change the number of squares that remove the existing grid and add a new one:
// 1-CHANGE GRID BUTTON
btn.addEventListener('click', (e) => {
    const allCont = document.getElementById("container");

    let grid = Number(prompt("Choose the number of square per side:", 16));
    while (grid < 0 || grid > 100 || !grid) {
        alert('Please choose a number between 1 and 100');
        grid = Number(prompt("Choose the number of square per side:", 16));
    };
    console.log(grid);

    document.body.removeChild(allCont);
    const container = document.createElement('div');
    container.setAttribute('id','container');
    const script = document.querySelector('script')
    document.body.insertBefore(container, script);

for (let i=1; i <= grid*grid; i++) { 
        const square = document.createElement('div');
        square.setAttribute('class', 'square');
        container.appendChild(square);
        container.style.gridTemplateColumns=`repeat(${grid}, 1fr)`;
    }

    container.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor='black'
    ;
});
});

// 2-RANDOM COLOR BUTTON
btnRandom.addEventListener('click',(e) => {
    const allCont = document.getElementById("container");
    //function to get random colors
    function random(num) {
        return Math.floor(Math.random() * num)
    };
    function bgChange() {
        const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
        return rndCol;
    };

    let grid = Number(prompt("Choose the number of square per side:", 16));
    while (grid < 0 || grid > 100 || !grid) {
        alert('Please choose a number between 1 and 100');
        grid = Number(prompt("Choose the number of square per side:", 16));
    };
    console.log(grid);

    document.body.removeChild(allCont);
    const container = document.createElement('div');
    container.setAttribute('id','container');
    const script = document.querySelector('script')
    document.body.insertBefore(container, script);

for (let i=1; i <= grid*grid; i++) { 
        const square = document.createElement('div');
        square.setAttribute('class', 'square');
        container.appendChild(square);
        container.style.gridTemplateColumns=`repeat(${grid}, 1fr)`;
    }

    container.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = bgChange();
    ;
});
});

// 3- BLACK GRADIENT BUTTON
btnGradient.addEventListener('click',(e) => {
    const allCont = document.getElementById("container");

    let grid = Number(prompt("Choose the number of square per side:", 16));
    while (grid < 0 || grid > 100 || !grid) {
        alert('Please choose a number between 1 and 100');
        grid = Number(prompt("Choose the number of square per side:", 16));
    };
    console.log(grid);

    document.body.removeChild(allCont);
    const container = document.createElement('div');
    container.setAttribute('id','container');
    const script = document.querySelector('script')
    document.body.insertBefore(container, script);

for (let i=1; i <= grid*grid; i++) { 
        const square = document.createElement('div');
        square.setAttribute('class', 'square');
        container.appendChild(square);
        container.style.gridTemplateColumns=`repeat(${grid}, 1fr)`;
    }

    //e.target.style.backgroundColor = 'rgb(255,255,255)';

    container.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'black'; 
        // can change the opacity that way for instance => e.target.style.opacity = 0.2;
         
        let opacity = e.target.style.opacity;
        // console.log(Number(opacity)); 
        //""starting"" opacity = 0 OR if no opacity have been defined opacity ~ 0
        if (opacity < 1) {
          e.target.style.opacity = (Number(opacity) + 0.1);
        }
});
});