const ul = document.querySelector('ul');

function none(){
    setTimeout(() => {
        ul.style.opacity = '1';
        setTimeout(() => {
            window.location = '../3-Introduction/index.html';
        }, 5000);
    }, 3500);
}

document.addEventListener('DOMContentLoaded',none);