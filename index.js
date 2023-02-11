import LocomotiveScroll from 'locomotive-scroll';



window.addEventListener('load', () => {
    document.body.classList.add('is-loaded');
    setTimeout(() => {
        const scroll = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
            smooth: true
        });
    }, 335);
});