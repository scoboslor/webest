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

/////////////////////////////////////////////////////////////////////////////

const tarifasSect = document.getElementById('t');
const tarifas = Array.from(tarifasSect.children);
const menuBtn = document.getElementById('menu-btn');

const c = document.createElement('div');
c.classList.add('curs');

tarifas.forEach(tarifa => {
    console.log(tarifa.children)
    Array.from(tarifa.children).forEach(ccc => {
        ccc.addEventListener('mouseenter', () => {
            document.body.appendChild(c);
        });
    });

    tarifa.addEventListener('mouseleave', () => {
        document.body.removeChild(c);
    });
});

window.addEventListener('mousemove', (e) => {
    if (document.body.contains(c)) {
        c.style.setProperty('--top', e.clientY + 'px');
        c.style.setProperty('--left', e.clientX + 'px');
    }
});


menuBtn.addEventListener('click', () => {
    document.body.classList.toggle('menu-open');
});

// After clicking on the links, the menu closes
const menuLinks = document.querySelectorAll('.menu a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('menu-open');
    });
});