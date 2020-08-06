window.onload=function(){
    const burger = document.querySelector('.nav-burger');
    const nav = document.querySelector('.navigation');

    burger.addEventListener('click', function(){
    burger.classList.toggle('cross');
    nav.classList.toggle('open');
    })
}

