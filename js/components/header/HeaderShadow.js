function shadow() {



    const headerContainer = document.querySelector('#headerContainer')
    document.addEventListener('scroll', () => {

        if (scrollY >= 80) {
            console.log('daugiau');
            headerContainer.classList.add('activ')
        }
        else {
            console.log('maziau');
            headerContainer.classList.remove('activ')
        }

    })
}

export { shadow }