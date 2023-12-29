const ul = document.querySelector('ul');

function none(){
    setTimeout(() => {
        ul.style.opacity = '1';
        setTimeout(() => {
            window.location = '../5-main/main.html';
        }, 5000);
    }, 3500);
}

document.addEventListener('DOMContentLoaded',none);