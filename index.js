document.querySelector('.hamburger').addEventListener('click', function(event) {
    event.preventDefault();
    if (this.classList.contains('is-active')) {
        this.classList.remove('is-active');
        document.querySelector('#menu').classList.remove('nav-active');
        document.body.classList.remove('body-active');
    } else {
        this.classList.add('is-active');
        document.querySelector('#menu').classList.add('nav-active');
        document.body.classList.add('body-active');
    }
})