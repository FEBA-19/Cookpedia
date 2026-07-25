import { Component, inject, signal } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Api } from '../services/api';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [Header, Footer, AsyncPipe, RouterLink],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {

  api = inject(Api)
  userDownloads$ = this.api.getUserDownloadListAPI()
  username:string = ""
  userId:string = ""
  imageURl:any = signal("https://cdn-icons-png.flaticon.com/512/3135/3135715.png")

  ngOnInit(){
    if(sessionStorage.getItem("user")){
      const user = JSON.parse(sessionStorage.getItem("user") || "")
      this.username = user.username
      this.userId = user._id
      // get picture
      user.picture && this.imageURl.set(`${this.api.server_url}/uploads/${user.picture}`)
    }
  }

  handleUploadPicture(event:Event){
    const input = event.target as HTMLInputElement
    if(input.files && input.files.length>0){
      const uploadFile = input.files[0]
      const reqBody = new FormData()
      reqBody.append("picture",uploadFile)
      this.api.editUserProfileAPI(this.userId,reqBody).subscribe((res:any)=>{
        alert("User profile updated successfully!!")
        sessionStorage.setItem("user",JSON.stringify(res))
        this.imageURl.set(`${this.api.server_url}/uploads/${res.picture}`)
      })
    }
  }

}
