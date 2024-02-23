// Tooltip enabling

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')

const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

//Apariencia navbar

let barraNavegador = document.querySelector('nav');

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
       barraNavegador.classList.add('bg-dark', 'shador')
    }
    else {
        barraNavegador.classList.remove('bg-dark', 'shador')
    }
})