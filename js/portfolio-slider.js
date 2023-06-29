(() => {
    const list = document.querySelector('.portfolio_list-img')
    const btn1 = document.getElementById("btn1");

    btn1.addEventListener('click', toggleModal)
    // close.addEventListener('click', toggleModal)

    function toggleModal() {
        list.classList.toggle('hidden')
    }
})()