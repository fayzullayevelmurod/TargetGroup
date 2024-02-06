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

// Quiz slider
var quizSlider = new Swiper(".swiper-popup-quiz", {
    spaceBetween: 80,
    navigation: {
        nextEl: ".quiz-btn-next",
    },
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    speed: 1000,
    allowTouchMove: false,
    followFinger: false,
});

// Quiz function
quizSlider.on('slideChange', function (e) {
    if(quizSlider.activeIndex === 2) {
        document.querySelector('.progress').setAttribute('data-value', 25);
        document.querySelector('.progress-value span').textContent = '25%';
        document.querySelector('.modal-popup-quiz-item__sale-number').textContent = '4%';
        document.querySelector('.modal-popup-quiz-item__quest-desc').textContent = 'Проконсультируйтесь с нашими специалистами, если не можете определиться с типом сайта';
        document.querySelector('.progress-value span').classList.add('active');
        document.querySelector('.progress-right .progress-bar').style.transform = 'rotate(90deg)';
    }
    if(quizSlider.activeIndex === 3) {
        document.querySelector('.progress').setAttribute('data-value', 40);
        document.querySelector('.progress-value span').textContent = '40%';
        document.querySelector('.modal-popup-quiz-item__sale-number').textContent = '5%';
        document.querySelector('.modal-popup-quiz-item__quest-desc').textContent = 'Уникальный дизайн и функционал будет учитывать все тонкости Вашего бизнеса';
        document.querySelector('.progress-right .progress-bar').style.transform = 'rotate(144deg)';
    }
    if(quizSlider.activeIndex === 4) {
        document.querySelector('.progress').setAttribute('data-value', 50);
        document.querySelector('.progress-value span').textContent = '50%';
        document.querySelector('.modal-popup-quiz-item__sale-number').textContent = '8%';
        document.querySelector('.modal-popup-quiz-item__quest-desc').textContent = 'Если Вы пока не определились с функциями сайта, можете не отвечать на этот вопрос';
        document.querySelector('.progress-right .progress-bar').style.transform = 'rotate(180deg)';
    }
    if(quizSlider.activeIndex === 5) {
        document.querySelector('.progress').setAttribute('data-value', 70);
        document.querySelector('.progress-value span').textContent = '70%';
        document.querySelector('.modal-popup-quiz-item__sale-number').textContent = '10%';
        document.querySelector('.modal-popup-quiz-item__quest-desc').textContent = 'Если у Вас есть старый сайт, то существует возможность сохранить его историю и позиции в поисковых системах';
        document.querySelector('.progress-left .progress-bar').style.transform = 'rotate(72deg)';
    }
    if(quizSlider.activeIndex === 6) {
        document.querySelector('.progress').setAttribute('data-value', 85);
        document.querySelector('.progress-value span').textContent = '85%';
        document.querySelector('.modal-popup-quiz-item__sale-number').textContent = '13%';
        document.querySelector('.modal-popup-quiz-item__quest-desc').textContent = 'Если Вам нужна консультация по вопросам продвижения, Вы всегда можете связаться с нами!';
        document.querySelector('.progress-left .progress-bar').style.transform = 'rotate(126deg)';
        document.querySelector('.swiper-pagination').style.display = 'none';
    }
    if(quizSlider.activeIndex === 8) {
        document.getElementById('swiperPaginNone').style.display = 'none';
    }
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


    // Calck check active
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




    // Radio Group item
    function handleRadioGroup(radioGroupItems, quizBtn) {
        radioGroupItems.forEach(item => item.addEventListener('click', () => {
            radioGroupItems.forEach(radioItem => radioItem.classList.remove('active'));
            item.classList.add('active');
            quizBtn.classList.add('active');
        }));
    }
    
    const radioGroupItems1 = document.querySelectorAll('.form_radio_group1 .form_radio_group-item');
    const quizBtn1 = document.getElementById('quizBtnNext1');
    handleRadioGroup(radioGroupItems1, quizBtn1);
    
    const radioGroupItems2 = document.querySelectorAll('.form_radio_group2 .form_radio_group-item');
    const quizBtn2 = document.getElementById('quizBtnNext2');
    handleRadioGroup(radioGroupItems2, quizBtn2);

    const radioGroupItems3 = document.querySelectorAll('.form_radio_group3 .form_radio_group-item');
    const quizBtn3 = document.getElementById('quizBtnNext3');
    handleRadioGroup(radioGroupItems3, quizBtn3);

    const radioGroupItems5 = document.querySelectorAll('.form_radio_group5 .form_radio_group-item');
    const quizBtn5 = document.getElementById('quizBtnNext5');
    handleRadioGroup(radioGroupItems5, quizBtn5);

    const radioGroupItems6 = document.querySelectorAll('.form_radio_group6 .form_radio_group-item');
    const quizBtn6 = document.getElementById('quizBtnNext6');
    handleRadioGroup(radioGroupItems6, quizBtn6);


    const quizGroup4 = document.querySelectorAll('.form_radio_group4 .form_radio_group-item');
    const quizBtnNext4 = document.getElementById('quizBtnNext4');

    quizGroup4.forEach(box => box.addEventListener('click', () => {
        quizGroup4.forEach(radioItem => radioItem.classList.remove('active'));

        box.classList.toggle('active');

        quizBtnNext4.classList.toggle('active', box.classList.contains('active'));
    }));



    const quizGroupEndRight = document.querySelector('.modal-popup-quiz-item-right');
    const quizGroupEndLeft = document.querySelector('.modal-popup-quiz-item-left');
    const endTitle = document.querySelector('.modal-popup-quiz-item__title');
    const quizProgressEnd = document.querySelector('.progress-bar-popup');
    const quizProgressForm = document.querySelector('.modal-popup-quiz');
    const quizBtnEnd = document.getElementById('quizBtnNext6');

    quizBtnEnd.addEventListener('click', () => {
        quizGroupEndLeft.classList.add('end-quiz');
        quizGroupEndRight.classList.add('end-quiz');
        quizProgressEnd.classList.add('end-quiz');
        quizProgressForm.classList.add('end-quiz');
        endTitle.classList.add('end-quiz');
    });



    // Modal Quiz start
    let modalPopupQuiz = document.querySelector('.modal-popup-quiz');
    let popupStarQuiz = document.querySelector('.popup-start-quiz');

    popupStarQuiz.addEventListener('click', () => {
        modalPopupQuiz.classList.toggle('active');
    });
    

    let modalPopupThank = document.querySelector('.modal-popup-quiz');
    let modalPopupThankLeft = document.querySelector('.modal-popup-quiz-item-left');
    let modalThankProgress = document.querySelector('.progress-bar-popup');
    let popupStarThank = document.getElementById('quizBtnNext7');

    popupStarThank.addEventListener('click', () => {
        modalPopupThank.classList.toggle('active-thank');
        modalPopupThankLeft.classList.toggle('active-thank');
        modalThankProgress.classList.toggle('active-thank');
    });


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


    // MODAL FIXED BODY
    let openQuizBtn = document.querySelector('.modal-open-quiz-btn');
    let quizCard = document.querySelector('.modal-open-quiz');

    openQuizBtn.addEventListener('click', () => {
        quizCard.classList.toggle('active');
        openQuizBtn.classList.toggle('active');
    });


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

    function applyMask(input) {
        let maskOptions = {
            mask: '+8 (000) 000-00-00',
            lazy: false
        };

        input.placeholder = 'Телефон';

        input.addEventListener('focus', function () {
            new IMask(input, maskOptions);
        });
    }

    phoneInputs.forEach(function (phoneInp) {
        applyMask(phoneInp);
    });

    phoneInput2.placeholder = '';
    applyMask(phoneInput2);
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