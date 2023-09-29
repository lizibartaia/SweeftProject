import { Component, HostListener, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { Users } from '../interfaces/users.interface';
import { tap } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public posts:Users[]=[]
  public selectPost: any;
  public xPos: number=0;
  public yPos: number=0;
  public page=1;


  users: any[] = [];
  pageSize = 5;
  isLoading = false;
  

  constructor(private myService:MyServiceService,private route:Router, private http:HttpClient) { }

  ngOnInit(): void {

     this.loadUsers();
     this.loadMoreUsers();

 
  }


  loadUsers(){
    this.myService.getList(this.page, this.pageSize).subscribe((data)=>{
      console.log(this.users)
      this.users=[...this.users, ...data]
      this.page++;
      console.log(this.users)
       
    })

  }

  loadMoreUsers(){

    console.log(window.innerHeight)
    console.log(window.scrollY)


    window.addEventListener("wheel", ()=>{

      const windowHeight= window.innerHeight;
      const scrolly= window.scrollY;
      if(windowHeight + scrolly >= document.body.offsetHeight){
        this.loadUsers()
  
      }
    })

   




  }

  
  showButtons(post: any, event: MouseEvent) {
  
    this.selectPost = post;
    this.xPos = event.clientX;
    this.yPos = event.clientY;
  }

  showDetails(){
    this.myService.checkfordetail=true
     this.route.navigate(['/home', this.selectPost.id])
     
    
    
  }
  

}
