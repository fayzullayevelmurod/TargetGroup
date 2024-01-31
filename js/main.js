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

// Calc project tab active
document.addEventListener('DOMContentLoaded', function () {
    let tabs = document.querySelectorAll('.calc-project__tab');
    let nextButton = document.querySelector('.calc-item__btn');

    tabs.forEach(tab => tab.addEventListener('click', () => {
        tab.classList.toggle('active');
        nextButton.classList.toggle('active', tab.classList.contains('active'));
    }));
});


// Calc project box active
document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.calc-project__box');
    const nextButton2 = document.querySelector('.calc-item__btn2');

    boxes.forEach(box => box.addEventListener('click', () => {
        box.classList.toggle('active');
        nextButton2.classList.toggle('active', box.classList.contains('active'));
    }));
});


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