// Header scroll 
window.addEventListener('scroll', function () {
    document.querySelector('.header').classList.toggle('header-fixed', window.scrollY > 0);
});

// Calc project tab active
var calcProject = new Swiper(".calcProject", {
    navigation: {
        nextEl: ".calc-project-next",
    },
    speed: 1000,
    allowTouchMove: false,
    followFinger: false,
});

document.addEventListener('DOMContentLoaded', function () {
    // Header menu
    const barsBtn = document.querySelector('.bars-btn');
    const menu = document.querySelector('.menu');
    const menuHeaderClose = document.querySelector('.menu-header__close');

    barsBtn.addEventListener('click', function () {
        menu.classList.add('active');
    });
    menuHeaderClose.addEventListener('click', function () {
        menu.classList.remove('active');
    });


    // Calc project tab active
    let tabs = document.querySelectorAll('.calc-project__tab');
    let nextButton = document.querySelector('.calc-item__btn');

    tabs.forEach(tab => tab.addEventListener('click', () => {
        tab.classList.toggle('active');
        nextButton.classList.toggle('active', tab.classList.contains('active'));
    }));


    // Calc project box active
    const boxes = document.querySelectorAll('.calc-project__box');
    const nextButton2 = document.querySelector('.calc-item__btn2');

    boxes.forEach(box => box.addEventListener('click', () => {
        box.classList.toggle('active');
        nextButton2.classList.toggle('active', box.classList.contains('active'));
    }));


    // Site function active
    let functionCard = document.querySelectorAll('.site-function__card');

    functionCard.forEach(tab => tab.addEventListener('click', () => {
        tab.classList.toggle('active');
    }));


    // site functions 
    const selectFunctionSite = document.getElementById('select-function__site');
    const resultTypeSite = document.querySelector('.result-type__site');
    const temaSiteInput = document.querySelector('.tema__site');
    const resultTemaSite = document.querySelector('.result-tema__site');
    const resultFunctionSite = document.querySelector('.result-functon__site');

    selectFunctionSite.addEventListener('change', () => {
        resultTypeSite.textContent = selectFunctionSite.options[selectFunctionSite.selectedIndex].text;
    });

    document.querySelectorAll('.site-function__card').forEach(card => {
        card.addEventListener('click', () => {
            const siteFunctionCards = document.querySelectorAll('.site-function__card.active');
            resultFunctionSite.textContent = Array.from(siteFunctionCards).map(card => card.querySelector('span').textContent).join(', ');
        });
    });

    temaSiteInput.addEventListener('input', () => {
        resultTemaSite.textContent = temaSiteInput.value;
    });

    const concatenatedText = Array.from(document.querySelectorAll('.site-function__card.active')).map(card => card.querySelector('span').textContent).join(', ');
    resultFunctionSite.textContent = concatenatedText;
});


// Card show
function setupPortfolio(hiddenItemsClass, moreButtonClass, removeButtonClass) {
    let hiddenItems = document.querySelectorAll(hiddenItemsClass);
    let moreButton = document.querySelector(moreButtonClass);
    let removeButton = document.querySelector(removeButtonClass);

    moreButton.addEventListener('click', function () {
        hiddenItems.forEach(item => item.style.display = 'flex');
        moreButton.style.display = 'none';
        removeButton.style.display = 'block';
    });

    removeButton.addEventListener('click', function () {
        hiddenItems.forEach(item => item.style.display = 'none');
        removeButton.style.display = 'none';
        moreButton.style.display = 'block';
    });

    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.addEventListener('click', function () {
            console.log('Portfolio item clicked:', item.querySelector('.portfolio-item__title').textContent);
        });
    });
}

document.addEventListener('DOMContentLoaded', function () {
    setupPortfolio('.item-none', '.portfolio-more', '.portfolio-remove');
    setupPortfolio('.item2-none', '.portfolio-more2', '.portfolio-remove2');
});


// Client slide
var clientSlide = new Swiper(".clientSlide", {
    slidesPerView: 6,
    grid: {
        rows: 2,
    },
    spaceBetween: 52,
    autoplay: {
        delay: 1,
        disableOnInteraction: false
    },
    speed: 1500,
    allowTouchMove: false,
    followFinger: false,
});

// Review slide
var reviewSlide = new Swiper(".reviewSlide", {
    slidesPerView: 4.5,
    spaceBetween: 45,
    speed: 800,
});

// Team slide
var teamSlide = new Swiper(".teamSlide", {
    slidesPerView: 4,
    spaceBetween: 45,
    pagination: {
        el: ".team-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".team-button-next",
        prevEl: ".team-button-prev",
    },
    speed: 800,
});

