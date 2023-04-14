let Grid = document.querySelector('.container-grid');

for(let i = 0; i <= 100; i++) {
    console.log('i');
    Grid.innerHTML = Grid.innerHTML + `<div class="square">${i}</div>`;
}