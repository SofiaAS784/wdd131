const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('ul');

menuButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    menuButton.classList.toggle('open');
});

const animatedText = document.querySelector('#animation');
let textIndex = 0;
function changeText() {
    const hills = ['Sierra de los Padres', 'Cerro Ventana', 'Sierra de los Difuntos', 'Sierra Barrosa', 'Cerro Tres Picos'];
    animatedText.textContent = hills[textIndex];
    textIndex = (textIndex + 1) % hills.length;
}

setInterval(changeText, 1500);

// hola