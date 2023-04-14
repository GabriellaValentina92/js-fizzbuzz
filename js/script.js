let Grid = document.querySelector('.container-grid');

for(let i = 0; i <= 100; i++) {
    console.log('i');

    if (i % 15 == 0) {
        Grid.innerHTML = Grid.innerHTML + `<div class="square">${i}</div>`;
    } else if (i % 5 == 0) {
        Grid.innerHTML = Grid.innerHTML + `<div class="square">${i} buzz</div>`;
    } else if (i % 3 == 0) {
        Grid.innerHTML = Grid.innerHTML + `<div class="square">${i} Fizz</div>`;
    } else {
        Grid.innerHTML = Grid.innerHTML + `<div class="square">${i}</div>`;

    }
}