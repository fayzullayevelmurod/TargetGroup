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
    let i = 1;
    document.querySelectorAll('.calc-project-next').forEach(el => {
        el.onclick = () => {
            if (i != 3) {
                document.querySelectorAll('.calc-project__num').forEach((btn, idx) => {
                    btn.classList.remove('active')
                })
                document.querySelectorAll('.calc-project__num')[i].classList.add('active');
                i++;
            }
        }
    })


    // Calcl check active
    let calcCheckLabel = document.querySelectorAll('.calc-check-label');
    let calcBtn2 = document.getElementById('calc-btn2');
    
    calcCheckLabel.forEach(tab => tab.addEventListener('click', () => {
        tab.classList.toggle('active');
        calcBtn2.classList.toggle('active', calcCheckLabel.some(tab => tab.classList.contains('active')));
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


    // messanger-item active
    let messageItem = document.querySelectorAll('.messanger-item label');

    messageItem.forEach(tab => tab.addEventListener('click', () => {
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
    autoplay: {
        delay: 1,
        disableOnInteraction: false
    },
    speed: 1500,
    allowTouchMove: false,
    followFinger: false,

    breakpoints: {
        300: {
            slidesPerView: 3,
            spaceBetween: 15,
            grid: {
                rows: 3,
            },
        },
        776: {
            slidesPerView: 5,
            spaceBetween: 15,
            grid: {
                rows: 2,
            },
        },
        1200: {
            slidesPerView: 6,
            spaceBetween: 15,
            grid: {
                rows: 2,
            },
        }
    }
});

// Review slide
var reviewSlide = new Swiper(".reviewSlide", {
    slidesPerView: 4.5,
    spaceBetween: 45,
    speed: 800,
    breakpoints: {
        300: {
            slidesPerView: 1.5,
            spaceBetween: 15,
            centeredSlides: true,
        },
        776: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        991: {
            slidesPerView: 4.5,
            spaceBetween: 45,
        }
    }
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
    breakpoints: {
        300: {
            slidesPerView: 1.5,
            spaceBetween: 15,
            centeredSlides: true,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        776: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        991: {
            slidesPerView: 4,
            spaceBetween: 45,
        }
    }

});



// Input mask
document.addEventListener('DOMContentLoaded', function () {
    let phoneInputs = document.querySelectorAll('.phone-inp');
    let phoneInput2 = document.getElementById('phoneModalInp');

    phoneInputs.forEach(function (phoneInp) {
        phoneInp.placeholder = 'Телефон';

        let maskOptions = {
            mask: '+375(00)000-00-00',
            lazy: false
        };

        phoneInp.addEventListener('focus', function () {
            new IMask(phoneInp, maskOptions);
        });
    });

    phoneInput2.placeholder = '';

    let maskOptions2 = {
        mask: '+375(00)000-00-00',
        lazy: false
    };

    phoneInput2.addEventListener('focus', function () {
        new IMask(phoneInput2, maskOptions2);
    });
});


// Home modal function
document.addEventListener('DOMContentLoaded', function () {
    const selectTab = document.querySelector('.select-tab');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const dropdownItems = document.querySelectorAll('.dropdown-menu li');

    selectTab.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownMenu.classList.toggle('active');
    });

    document.body.addEventListener('click', () => dropdownMenu.classList.remove('active'));

    dropdownItems.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            selectTab.querySelector('span').textContent = item.textContent;
            dropdownItems.forEach((otherItem) => otherItem.classList.remove('active'));
            item.classList.add('active');
            dropdownMenu.classList.remove('active');
        });
    });
});


// video player
const playerCaptions = new MediaElementPlayer('player', {
    iconSprite: '../images/icons/play-icon.svg', // path to svg-spritemap for all icons
});