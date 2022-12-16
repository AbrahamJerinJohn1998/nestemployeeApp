import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent {
  empcode=""
  task=""
  status=""
  constructor(private api:ApiService){}
  readValue=()=>
  {
    let data:any={"empcode":this.empcode,"task":this.task,"status":this.status}
    console.log(data)
    this.api.addTask(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if(response.status=="success")
        {
          alert("task added")
          this.empcode=""
          this.task=""
        }
        else{
          alert("something went wrong")
        }
      }
    )
  }
}
