import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Api {
  server_url:string = "http://localhost:3000"
  http = inject(HttpClient)

  // http://localhost:3000/recipes : get request by Home and Recipe component when page loads
  getAllRecipesAPI():Observable<any[]>{
    return this.http.get<any[]>(`${this.server_url}/recipes`)
  }

  // http://localhost:3000/feedbacks : post request by Contact component when sumit button is clicked
  saveFeedbackAPI(reqBody:any){
    return this.http.post(`${this.server_url}/feedbacks`,reqBody)
  }

  // http://localhost:3000/register : post request by Register component when register btn clicked
  registerAPI(reqBody:any){
    return this.http.post(`${this.server_url}/register`,reqBody)
  }

  // http://localhost:3000/login : post request by Login component when login btn clicked
  loginAPI(reqBody:any){
    return this.http.post(`${this.server_url}/login`,reqBody)
  }
}
