const suspended = document.querySelector('.suspended');
const nav = document.querySelector('.navigation');

suspended.addEventListener('click', () => {
    nav.classList.toggle('open');
});

nav.addEventListener('click', () => {
    nav.classList.remove('open');
});


//======CONFIGURAÇÃO DO SLIDE========

const slidesContainer = document.querySelector('main .container .slides');
const slideItems = document.querySelectorAll('main .container .conteudo');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const indicatorsContainer = document.querySelector('.indicators');

let currentSlide = 0;
const totalSlides = slideItems.length;
let intervalId;

// Função para atualizar a posição do slide
function updateSlidePosition() {
    const offset = currentSlide * -100; // Calcula o deslocamento
    slidesContainer.style.transform = `translateX(${offset}%)`;
    updateIndicators();
}

// Função para atualizar os indicadores
function updateIndicators() {
    const indicators = document.querySelectorAll('.indicators button');
    indicators.forEach((indicator, index) => {
        if (index === currentSlide) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// Navegação entre os slides
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides; // Loop para o próximo slide
    updateSlidePosition();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // Loop para o slide anterior
    updateSlidePosition();
}

// Adicionar indicadores
function createIndicators() {
    for (let i = 0; i < totalSlides; i++) {
        const button = document.createElement('button');
        if (i === 0) button.classList.add('active');
        button.addEventListener('click', () => {
            currentSlide = i;
            updateSlidePosition();
        });
        indicatorsContainer.appendChild(button);
    }
}

// Inicializar o loop automático
function startAutoSlide() {
    intervalId = setInterval(nextSlide, 3000); // Troca automaticamente a cada 3 segundos
}

// Parar o loop automático ao interagir
function stopAutoSlide() {
    clearInterval(intervalId);
}

// Adicionar eventos aos botões
prevButton.addEventListener('click', () => {
    stopAutoSlide();
    prevSlide();
    startAutoSlide();
});

nextButton.addEventListener('click', () => {
    stopAutoSlide();
    nextSlide();
    startAutoSlide();
});

// Inicializar tudo
createIndicators();
updateSlidePosition();
startAutoSlide();
