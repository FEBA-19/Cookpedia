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
import { SearchPipe } from '../pipes/search-pipe';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';

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
  imports: [CommonModule, AdminRoutingModule,SearchPipe,FormsModule,MatCardModule, MatDatepickerModule],
  providers: [provideNativeDateAdapter()]
})
export class AdminModule {}
