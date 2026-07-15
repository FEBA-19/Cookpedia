import { Component, inject } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Api } from '../services/api';
import { FormsModule, NgForm } from '@angular/forms';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-contact',
  imports: [Header,Footer,FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  api = inject(Api)
  name:string = ""
  email:string = ""
  message:string = ""

  submitFeedback(form:NgForm){
    this.api.saveFeedbackAPI({name:this.name,email:this.email,message:this.message}).subscribe((res:any)=>{
      alert("Thank You for your feedback...We appreciate your effort to improve us!!")
      form.resetForm()
    })
  }

}
