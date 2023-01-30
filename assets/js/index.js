// slide show
var slideIndex = 0;
const sliders = document.querySelectorAll('.slider');

function slide() {
    for (let index = 0; index < sliders.length; index++) {
        const element = sliders[index];
        element.style.display = 'none';
        element.style.backgroundImage = 'url(' + element.dataset.img + ')';
    }
    slideIndex++;
    if (slideIndex > sliders.length) {
        slideIndex = 1;
    }
    sliders[slideIndex - 1].style.display = 'block';
    setTimeout(slide, 4000);
}

slide();
// end slide show

// open modal
const buyTickets = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.js-modal');
const modalClose = document.querySelector('.js-modal-close');
const modalContent = document.querySelector('.js-modal-content');

function toggleShowBuyTickets() {
    modal.classList.toggle('open');
}
for (const buy of buyTickets) {
    buy.addEventListener('click', toggleShowBuyTickets);
}
// close btn
modalClose.onclick = toggleShowBuyTickets;

// close modal when clicks anywhere
// window.onclick = function (event) {
//     if (event.target === modal) {
//         toggleShowBuyTickets();
//     }
// }
modal.onclick = toggleShowBuyTickets;
modalContent.onclick = (event) => {
    event.stopPropagation();
}
// end open modal
