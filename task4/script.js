let link = document.querySelector('a');

link.addEventListener('click', change);

function change(event) {
    let a = prompt();
    link.textContent = a;
    event.preventDefault();
}