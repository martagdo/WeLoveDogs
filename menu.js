const botaoMenu = document.querySelector('.menu-hamburguer');
const menuLinks = document.querySelector('.links');

if (botaoMenu && menuLinks) {
    botaoMenu.addEventListener('click', () => {
        menuLinks.classList.toggle('menu-aberto');
        botaoMenu.classList.toggle('ativo');
        document.body.classList.toggle('no-scroll');
    });
}