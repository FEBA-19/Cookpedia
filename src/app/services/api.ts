import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeModel } from '../admin/models/recipeModel';

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

  // http://localhost:3000/recipes/:id : get request by view component when any recipe is clicked
  viewRecipeAPI(recipeId:string):Observable<any>{
    return this.http.get(`${this.server_url}/recipes/${recipeId}`)
  }

  // http://localhost:3000/related-recipes/6a4f26aa6ca794708c8b10ac?cuisine=Italian : get request by view component when page opens
  getAllRelatedRecipeAPI(recipeId:string,cuisine:string):Observable<any>{
    return this.http.get<any>(`${this.server_url}/related-recipes/${recipeId}?cuisine=${cuisine}`)
  }

  // http://localhost:3000/user-collection/6a4f26aa6ca794708c8b109f : post request by view component when saverecipe btn clicked
  addRecipeToUserCollectionAPI(recipeId:string,recipe:any){
    return this.http.post(`${this.server_url}/user-collection/${recipeId}`,recipe)
  }

  // http://localhost:3000/user-collection : get request by collection component when page loads
  getuserRecipeCollectionAPI(){
    return this.http.get(`${this.server_url}/user-collection`)
  }

  // http://localhost:3000/user-collection/:id : delete request by collection component when delete btn clicked
  deleteuserRecipeFromCollectionAPI(recipeId:string){
    return this.http.delete(`${this.server_url}/user-collection/${recipeId}`)
  }

  // http://localhost:3000/download/:id : post request by view component when download btn clicked
  downloadRecipeAPI(recipeId:string,recipe:any){
    return this.http.post(`${this.server_url}/download/${recipeId}`,recipe)
  }

  // http://localhost:3000/user-downloads : get request by profile component when page loads
  getUserDownloadListAPI():Observable<any>{
    return this.http.get(`${this.server_url}/user-downloads`)
  }

  // http://localhost:3000/users/:id : put request by profile component when picture uploads
  editUserProfileAPI(userId:string,reqBody:any){
    return this.http.put(`${this.server_url}/users/${userId}`,reqBody)
  }

  // http://localhost:3000/feedbacks : get request by admin feedback component when page loads
  getAllFeedbackListAPI(){
    return this.http.get(`${this.server_url}/feedbacks`)
  }

  // http://localhost:3000/downloads : get request by admin download component when page loads
  getAllDownloadListAPI():Observable<any>{
    return this.http.get(`${this.server_url}/downloads`)
  }

  // http://localhost:3000/users : get request by admin users component when page loads
  getAllUserListAPI():Observable<any>{
    return this.http.get(`${this.server_url}/users`)
  }

  // http://localhost:3000/feedbacks/:id : put request by admin feedback component when approve/cancel btn clicked
  editFeedbackStatusListAPI(id:string,reqBody:any){
    return this.http.put(`${this.server_url}/feedbacks/${id}`,reqBody)
  }

  // http://localhost:3000/approved-feedbacks : get request by home component when page loads
  getAllApprovedFeedbacksAPI():Observable<any>{
    return this.http.get(`${this.server_url}/approved-feedbacks`)
  }

  // http://localhost:3000/recipes : post request by manage-recipe component when add recipe btn clicked
  addRecipeAPI(recipe:RecipeModel){
    return this.http.post(`${this.server_url}/recipes`,recipe)
  }

  // http://localhost:3000/recipes/:id : put request by manage-recipe component when update recipe btn clicked
  updateRecipeAPI(recipeId:string,recipe:RecipeModel){
    return this.http.put(`${this.server_url}/recipes/${recipeId}`,recipe)
  }

  // http://localhost:3000/recipes/:id : delete request by recipe-list component when delete btn clicked
  deleteRecipeAPI(recipeId:string){
    return this.http.delete(`${this.server_url}/recipes/${recipeId}`)
  }
}
