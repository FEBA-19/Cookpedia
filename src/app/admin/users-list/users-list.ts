import { Component, inject } from '@angular/core';
import { Api } from '../../services/api';

@Component({
  selector: 'app-users-list',
  standalone: false,
  templateUrl: './users-list.html',
  styleUrl: './users-list.css',
})
export class UsersList {
  api = inject(Api)
  allUsersList$ = this.api.getAllUserListAPI()
}
