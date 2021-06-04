// IMPORT
import { renderHeader } from './components/header/HeaderRender.js'
import { renderSidebar } from './components/header/SidebarRender.js'
import { header } from './components/header/Header.js';
import { shadow } from './components/header/HeaderShadow.js'
import { renderBlog } from './components/blog/renderBlog.js'
// EXECUTION
renderHeader('#navRow');
shadow();
renderSidebar('#headerSidebar')
renderBlog('#blog');
header();



