
import { Home } from "./view/home";


const routes = {
   '/': Home 

}

export function Router(){
    const path = window.location.pathname;
    const view = routes[path];

function render(view){
    const app=document.querySelector('#App');
    app.innerHTML=view();
}

render(view);

}

