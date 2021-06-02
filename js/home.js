// IMPORT
import { header } from './components/header/Header.js';

// EXECUTION

header();
navBarShadow = document.getElementById(header);
document.addEventListener('scroll', () => {
    if (scrollY > 40) {
        navBarShadow.classList.add('activ');
    }
}
)