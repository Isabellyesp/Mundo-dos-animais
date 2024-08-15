// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const animalImage = document.getElementById('animal-image');
    const animalTitle = document.getElementById('animal-title');
    const animalDescription = document.getElementById('animal-description');
    const prevImageBtn = document.getElementById('prev-image');
    const nextImageBtn = document.getElementById('next-image');
    const moreInfoBtn = document.getElementById('more-info');

    // Array de objetos para as imagens e páginas de informações
    const animals = [
        {
            src: 'img/01-lion-populations-nationalgeographic_1777804.jpg',
            alt: 'Leão',
            title: 'Leão',
            description: 'O leão é conhecido como o rei da selva e é um dos grandes felinos mais icônicos da África.',
            infoPage: 'leao.html'
        },
        {
            src: 'img/elefante.jpeg',
            alt: 'Elefante',
            title: 'Elefante',
            description: 'Os elefantes são os maiores animais terrestres e são conhecidos por suas memórias impressionantes e grande inteligência.',
            infoPage: 'elefante.html'
        },
        {
            src: 'img/pandas.webp',
            alt: 'Panda',
            title: 'Panda',
            description: 'Os pandas são conhecidos por suas pelagens distintas e são nativos da China. Eles são famosos por sua dieta à base de bambu.',
            infoPage: 'panda.html'
        }
    ];

    let currentIndex = 0;

    // Função para atualizar a imagem e informações
    function updateAnimalInfo(index) {
        animalImage.src = animals[index].src;
        animalImage.alt = animals[index].alt;
        animalTitle.textContent = animals[index].title;
        animalDescription.textContent = animals[index].description;
    }

    // Inicializar a primeira imagem e informações
    updateAnimalInfo(currentIndex);

    // Evento de clique para alternar entre os temas claro e escuro
    themeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        themeToggle.textContent = body.classList.contains('dark-mode') ? 'Alternar para Tema Claro' : 'Alternar para Tema Escuro';
    });

    // Evento de clique para exibir a imagem anterior
    prevImageBtn.addEventListener('click', function () {
        currentIndex = (currentIndex === 0) ? animals.length - 1 : currentIndex - 1;
        updateAnimalInfo(currentIndex);
    });

    // Evento de clique para exibir a próxima imagem
    nextImageBtn.addEventListener('click', function () {
        currentIndex = (currentIndex === animals.length - 1) ? 0 : currentIndex + 1;
        updateAnimalInfo(currentIndex);
    });

    // Evento de clique para abrir a página de mais informações
    moreInfoBtn.addEventListener('click', function () {
        window.location.href = animals[currentIndex].infoPage;
    });
});
