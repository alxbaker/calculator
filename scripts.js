const display = document.querySelector('#display');
const allBtns = document.querySelectorAll("button");

allBtns.forEach((button) => {
    const keyContent = button.textContent;
    button.addEventListener('click', () => {
        display.textContent += keyContent;
    });
});