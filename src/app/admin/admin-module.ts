import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing-module';
import { Dashboard } from './dashboard/dashboard';
import { RecipeList } from './recipe-list/recipe-list';
import { UsersList } from './users-list/users-list';
import { DownloadList } from './download-list/download-list';
import { FeedbackList } from './feedback-list/feedback-list';
import { ManageRecipe } from './manage-recipe/manage-recipe';
import { AdminSidebar } from './admin-sidebar/admin-sidebar';
import { AdminHeader } from './admin-header/admin-header';

@NgModule({
  declarations: [
    Dashboard,
    RecipeList,
    UsersList,
    DownloadList,
    FeedbackList,
    ManageRecipe,
    AdminSidebar,
    AdminHeader,
  ],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
