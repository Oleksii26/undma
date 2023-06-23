(() => {
    const burger = document.querySelector('.container-menu')
    const close = document.querySelector('.menu_close')
    const menu = document.querySelector('.menu')

    burger.addEventListener('click', toggleModal)
    close.addEventListener('click', toggleModal)

    function toggleModal() {
        menu.classList.toggle('is-hidden')
    }
})()