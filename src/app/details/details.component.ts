import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';
import { MyServiceService } from '../my-service.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  
  public letter:string=''
  public id:number=0
  public data:any
  public friends:any[]=[]
  public ID:any
  

  constructor(private myService:MyServiceService, private http:HttpClient, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['detailsId']
    this.receiveData()
     
     
  }
  public receiveData(){
    
    this.myService.idData(this.id).subscribe(data=>{
      console.log(data)
      this.data=data
      console.log(this.data.id)
      this.friendId(this.data.id)
    })

    
  }

  public friendId(userId:number){

    this.myService.getfriendList().subscribe(friends=>{
      this.friends=friends;
      console.log(this.friends)
      this.friends = friends.filter((friendship: { userId: number; }) => friendship.userId === userId);
      console.log(this.friends)
      
    })
    
    
  }

 

}
