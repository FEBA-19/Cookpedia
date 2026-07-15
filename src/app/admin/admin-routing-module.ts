import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { RecipeList } from './recipe-list/recipe-list';
import { ManageRecipe } from './manage-recipe/manage-recipe';
import { UsersList } from './users-list/users-list';
import { DownloadList } from './download-list/download-list';
import { FeedbackList } from './feedback-list/feedback-list';

const routes: Routes = [
   // dashboard : http://localhost:4200/admin
    {
        path:'', component:Dashboard, title:"Admin - Dashboard"
    },
     // recipelist : http://localhost:4200/recipe-list
    {
        path:'recipe-list', component:RecipeList, title:"Admin - All recipes"
    },
     // recipes/add : http://localhost:4200/recipes/add
    {
        path:'recipes/add', component:ManageRecipe, title:"Admin - Add Recipe"
    },
     // recipes/:id : http://localhost:4200/recipes/:id
    {
        path:'recipes/:id', component:ManageRecipe, title:"Admin - Update Recipe"
    },
     // users : http://localhost:4200/users
    {
        path:'users', component:UsersList, title:"Admin - All users"
    },
     // downloads : http://localhost:4200/downloads
    {
        path:'downloads', component:DownloadList, title:"Admin - All downloads"
    },
     // feedbacks : http://localhost:4200/feedbacks
    {
        path:'feedbacks', component:FeedbackList, title:"Admin - All feedbacks"
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
