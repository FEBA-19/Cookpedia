import { Component, inject, signal } from '@angular/core';
import { Api } from '../../services/api';

@Component({
  selector: 'app-recipe-list',
  standalone: false,
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList {
  api = inject(Api)
  allRecipes:any = signal([])
  searchKey:string = ""

  ngOnInit(){
    this.getAllRecipes()
  }

  getAllRecipes(){
    this.api.getAllRecipesAPI().subscribe((res:any)=>{
      this.allRecipes.set(res)
    })
  }

  deleteRecipe(id:string){
      if(confirm('Are you sure, do you want to delete the recipe?')){
        this.api.deleteRecipeAPI(id).subscribe((res:any)=>{
          alert("Recipe has been deleted Successfully!!")
          this.getAllRecipes()
        })
      }
      
  }
}
