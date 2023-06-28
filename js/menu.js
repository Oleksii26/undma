var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
var html = document.getElementsByTagName('html')[0];
// html.style.overflow = 'hidden';

(() => {
    const burger = document.querySelector('.container-menu')
    const close = document.querySelector('.menu_close')
    const menu = document.querySelector('.menu')
    const menuList = document.querySelector('.menu_list')

    burger.addEventListener('click', toggleModal)
    close.addEventListener('click', toggleModal)
    menuList.addEventListener('click', closeMenu)

    function toggleModal() {
        if (menu.classList.contains('is-hidden')) {
            menu.classList.remove('is-hidden')
            html.style.overflow = 'hidden';
        }
        else {
            menu.classList.add('is-hidden')
            html.style.overflow = 'auto';
            window.scrollTo(0, scrollPosition);

        }
        
    }

    function closeMenu() {
        menu.classList.add('is-hidden')
        html.style.overflow = 'auto';
        window.scrollTo(0, scrollPosition);
    }
})()





// (() => {
//     const burger = document.querySelector('.container-menu')
//     const close = document.querySelector('.menu_close')
//     const menu = document.querySelector('.menu')

//     burger.addEventListener('click', toggleModal)
//     close.addEventListener('click', toggleModal)

//     function toggleModal() {
//         menu.classList.toggle('is-hidden')
//     }
// })()