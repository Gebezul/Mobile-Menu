const hambMenu = document.querySelector('.hamburger')
hambMenu.addEventListener('click', function() {
     
    this.classList.toggle('is-active')

    document.querySelector('#menu').classList.toggle('nav-active');

    document.body.classList.toggle('body-active');

})