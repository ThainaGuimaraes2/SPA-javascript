
import { Home } from "./view/home.js";
import { Imagens } from "./view/imagens.js";


const routes = {
   '/': Home,
   '/imagens':Imagens

}

export function Router(){
    const path = window.location.pathname;
    const view = routes[path];

function render(view){
    const app=document.querySelector('#app');
    app.innerHTML=view();
}

render(view);

}

