import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  if(sessionStorage.getItem("user") && sessionStorage.getItem("token")){
      const user = JSON.parse(sessionStorage.getItem("user") || "")
      if(user.role == "user"){
        return true;
      }else{
        alert("Unauthorised Access!!")
        router.navigateByUrl('/pagenotfound')
        return false;
      }
  }else{
        alert("Unauthorised Access!! Please Login!!")
        router.navigateByUrl('/login')
        return false;
  }
  
};
