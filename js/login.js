const langBtn = document.querySelector('.lang-btn');

langBtn.addEventListener('click', () => {
    document.body.classList.toggle('arabic_lang');

    langBtn.querySelector('span:first-child').classList.toggle('active');
    langBtn.querySelector('span:last-child').classList.toggle('active');
})