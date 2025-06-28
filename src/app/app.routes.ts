import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Catalogo } from './catalogo/catalogo'
import { Registro } from './registro/registro'
import { Login } from './login/login'
import { Detalle } from './detalle/detalle'
import { Chat } from './chat/chat'

export const routes: Routes = [
    {
        path:'home',
        component: Home
    },
    {
        path: 'catalogo',
        component: Catalogo
    },
    {
        path:'registro',
        component: Registro
    },
    {
        path: 'login',
        component: Login
    },
    {
        path:'detalle',
        component: Detalle
    },
    {
        path:'chat',
        component: Chat
    }
    

];
