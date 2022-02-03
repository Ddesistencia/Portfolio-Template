const menu = document.querySelector('#menu-btn');
const header = document.querySelector('.header');


menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

const switchTheme = document.querySelector('#switch-theme');

switchTheme.onclick = () =>{
    switchTheme.classList.toggle('fa-sun')
    if(switchTheme.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        /* Sorry sorry about this number :Z */
        document.body.classList.remove('active');
    }
}