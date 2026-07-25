import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Recipes } from './recipes/recipes';
import { About } from './about/about';
import { Login } from './login/login';
import { Register } from './register/register';
import { Profile } from './profile/profile';
import { Collection } from './collection/collection';
import { View } from './view/view';
import { Pnf } from './pnf/pnf';
import { Contact } from './contact/contact';

export const routes: Routes = [
    // lazy loaded module path : http://localhost:4200/admin
    {
       path:'admin' , loadChildren:()=> import('./admin/admin-module').then(module=>module.AdminModule)
    },
    // http://localhost:4200/ - Home
    {
        path:'', component:Home, title:"Home"
    },
     // http://localhost:4200/ - recipes
    {
        path:'recipes', component:Recipes, title:"All Recipes"
    },
     // http://localhost:4200/ - About
    {
        path:'about', component:About, title:"About"
    },
     // http://localhost:4200/ - Contact
    {
        path:'contact', component:Contact, title:"Contact"
    },
     // http://localhost:4200/ - Login
    {
        path:'login', component:Login, title:"Login"
    },
     // http://localhost:4200/ - Register
    {
        path:'register', component:Register, title:"Register"
    },
     // http://localhost:4200/ - User Profile
    {
        path:'profile', component:Profile, title:"User Profile"
    },
     // http://localhost:4200/ - User Collection
    {
        path:'collection', component:Collection, title:"User Collection"
    },
     // http://localhost:4200/ - View Recipe
    {
        path:'recipes/:id', component:View, title:"View Recipe"
    },
    
     // http://localhost:4200/ - PNF
    {
        path:'**', component:Pnf, title:"Page Not Found"
    }
];
