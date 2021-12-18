// IMPORT
import { renderHeader } from './components/header/HeaderRender.js'
import { renderSidebar } from './components/header/SidebarRender.js'
import { header } from './components/header/Header.js';
import { shadow } from './components/header/HeaderShadow.js'
import { renderBlog } from './components/blog/renderBlog.js'
import { navBarData } from './data/Header/navbarData.js';
import { offeredServices } from './components/offeredServices/offeredServices.js';
import { offeredData } from './data/offeredServicesData/offeredServicesData.js'
import { counter } from './components/counter/counter.js';
import { counterData } from './data/counterData/counterData.js'
import { validateEmail } from './components/email-validator.js';

import { renderCategories } from './components/projects/CategoriesRender.js'
import { renderProjects } from './components/projects/projects.js';
import { projectsData } from './data/projectsData.js'
import { filter } from './components/projects/projectsFilter.js';


import { renderPersonal } from './components/personal-details/personal-details.js'
import { renderHero } from './components/hero/hero.js'


// EXECUTION
renderHeader('#navRow');
renderCategories('#categories')
shadow();
renderSidebar('#headerSidebar', navBarData)
renderProjects('#categoriesPic', projectsData)
renderBlog('#blog');
header();
var newsletterForm = document.getElementById("newsletter-form");
newsletterForm.addEventListener('submit', onNewsletterFormSubmit);

=======
new offeredServices(offeredData);
new counter(counterData)
renderPersonal('#personal');



function onNewsletterFormSubmit(event) {

    event.preventDefault();
    var email = event.currentTarget.getElementsByClassName('emailFooter')[0].value;
    if (!validateEmail(email)) {
        alert('Not valid email');
    }
}

