import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isUserLoggedin:boolean = false
  loggedinUsername:string = ""
  router = inject(Router)

  ngOnInit(){
    if(sessionStorage.getItem("token") && sessionStorage.getItem("user")){
      this.isUserLoggedin = true
      const user = JSON.parse(sessionStorage.getItem("user") || "")
      this.loggedinUsername = user?.username
    }
  }

  logout(){
    sessionStorage.clear()
    this.isUserLoggedin = false
    this.loggedinUsername = ""
    this.router.navigateByUrl('/')
  }
}
