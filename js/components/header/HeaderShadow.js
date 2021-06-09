function shadow() {



    const headerContainer = document.querySelector('#headerContainer')
    document.addEventListener('scroll', () => {

        if (scrollY >= 80) {
            console.log('daugiau');
            headerContainer.classList.add('shadow')
        }
        else {
            console.log('maziau');
            headerContainer.classList.remove('shadow')
        }

    })
}

export { shadow }