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


// EXECUTION
renderHeader('#navRow');
shadow();
renderSidebar('#headerSidebar', navBarData)
renderBlog('#blog');
header();
new offeredServices(offeredData);
new counter(counterData)





