let Grid = document.querySelector('.container-grid');

for(let i = 1; i <= 100; i++) {
    console.log('i');

    if (i % 15 == 0) {
        Grid.innerHTML = Grid.innerHTML + `<div class="square fizzbuzz">fizzbuzz</div>`;
    } else if (i % 5 == 0) {
        Grid.innerHTML = Grid.innerHTML + `<div class="square buzz">buzz</div>`;
    } else if (i % 3 == 0) {
        Grid.innerHTML = Grid.innerHTML + `<div class="square fizz">Fizz</div>`;
    } else {
        Grid.innerHTML = Grid.innerHTML + `<div class="square">${i}</div>`;

    }
}