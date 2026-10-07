import { Footer } from './components/footer.js';
import {Navbar} from './components/navbar.js';
import { Router } from './router.js';

const navbar = document.querySelector('#navbar');
navbar.innerHTML = Navbar();

const footer = document.querySelector('#footer');
footer.innerHTML = Footer();


//vinvular o click do link a o processo de carregar o conteúdo
document.addEventListener('click', Event=>{
    const link = Event.target.closest('[data-link]');
    Event.preventDefault();
    const url = link.getAttribute('href');
    history.pushState(null,'',url);
    Router();
});
window.addEventListener('popstate',Router);