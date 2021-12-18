// IMPORT
import { renderHeader } from './components/header/HeaderRender.js'
import { renderSidebar } from './components/header/SidebarRender.js'
import { header } from './components/header/Header.js';
import { shadow } from './components/header/HeaderShadow.js'
import { renderBlog } from './components/blog/renderBlog.js'
import { navBarData } from './data/Header/navbarData.js';
import { offeredServices } from './components/offeredServices/offeredServices.js';
import { offeredData } from './data/offeredServicesData.js'
import { counter } from './components/counter/counter.js';
import { counterData } from './data/counterData/counterData.js'
import { validateEmail } from './components/email-validator.js';


// EXECUTION
renderHeader('#navRow');
shadow();
renderSidebar('#headerSidebar', navBarData)
renderBlog('#blog');
header();

var newsletterForm = document.getElementById("newsletter-form");
newsletterForm.addEventListener('submit', onNewsletterFormSubmit);

new offeredServices(offeredData);
new counter(counterData)



function onNewsletterFormSubmit(event) {

    event.preventDefault();
    var email = event.currentTarget.getElementsByClassName('emailFooter')[0].value;
    if (!validateEmail(email)) {
        alert('Not valid email');
    }
}

