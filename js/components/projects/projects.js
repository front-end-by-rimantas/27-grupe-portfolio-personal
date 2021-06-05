function renderProjects(data) {
    let categories = [];
    for (let i = 0; i < data.length; i++) {
        let project = data[i]
        if (categories.indexOf(project.category) === -1) {
            if (i === 0) {
                categories.push('All');
            }
            categories.push(project.category);

        }
    }
    for (const element of categories) {
        console.log(element)
        //document.querySelector('.categories').innerHTML = CATEGORIES;
        //return document.querySelector('.title-projects').innerHTML = PROJECTS;

    }
}
function filterGallery() {
    /*let categories = document.getElementsByClassName("categories");
 
    categories.forEach((item) => {
        item.addEventListener('click', (event) => {
            let category = event.target.textContent;
 
            event.preventDefault();
 
            document.getElementsByClassName("categories ").classList.remove('active');
            event.target.classList.add('active');
 
            let projects = document.getElementsByClassName("categories");
 
            projects.forEach((project) => {
                if (category === 'All') {
                    project.classList.add('visible');
                } else {
                    if (project.dataset.category === category) {
                        project.classList.add('visible');
                    } else {
                        project.classList.remove('visible');
                    }
                }
            });
        });
    });
    */
}


export { filterGallery }
export { renderProjects }