import { HttpClient } from '@angular/common/http';
import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable,of } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(
    private http:HttpClient
  ) {

  }
  ngOnInit(): void {
   console.log("dfsgdfg")

   this.http.get("https://www.boredapi.com/api/activity").subscribe(res=>{
    console.log("res" , res);
    
   })
  }


}

