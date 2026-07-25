import { Component, inject, signal } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Api } from '../services/api';

@Component({
  selector: 'app-collection',
  imports: [Header,Footer],
  templateUrl: './collection.html',
  styleUrl: './collection.css',
})
export class Collection {
  api = inject(Api)
  recipeCollection:any = signal([])

  ngOnInit(){
    this.getUserCollection()
  }

  getUserCollection(){
    this.api.getuserRecipeCollectionAPI().subscribe((res:any)=>{
      this.recipeCollection.set(res)
      console.log(this.recipeCollection());
    })
  }

  deleteRecipeFromUserCollection(id:string){
    this.api.deleteuserRecipeFromCollectionAPI(id).subscribe((res:any)=>{
      alert(`${res.name} has been removed from your collection!!`)
      this.getUserCollection()
    })
  }
}
