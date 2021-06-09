function filter() {


    const vectorFilter = document.querySelector('.vectorFilter')
    const rasterFilter = document.querySelector('.rasterFilter')
    const uiFilter = document.querySelector('.uiFilter')
    const printingFilter = document.querySelector('.printingFilter')

    const vector = document.querySelector('.vector')
    const raster = document.querySelector('.raster')
    const ui = document.querySelector('.ui')
    const printing = document.querySelector('.printing')

    vectorFilter.addEventListener('click', () => {
        vector.style.display = 'block';
        raster.style.display = 'none';
        ui.style.display = 'none';
        printing.style.display = 'none';
    })
    rasterFilter.addEventListener('click', () => {
        raster.style.display = 'block';
        vector.style.display = 'none';
        ui.style.display = 'none';
        printing.style.display = 'none';
    })
    uiFilter.addEventListener('click', () => {
        ui.style.display = 'block';
        raster.style.display = 'none';
        vector.style.display = 'none';
        printing.style.display = 'none';
    })
    printingFilter.addEventListener('click', () => {
        printing.style.display = 'block';
        raster.style.display = 'none';
        ui.style.display = 'none';
        vector.style.display = 'none';
    })
}

export { filter }