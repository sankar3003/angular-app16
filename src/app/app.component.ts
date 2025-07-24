import { HttpClient } from '@angular/common/http';
import { Component, DoCheck, OnChanges, OnInit, SimpleChanges, Signal, computed } from '@angular/core';
import { Observable,of } from 'rxjs';
import { map } from 'rxjs/operators';
import { signal  } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  userLst = [
    "sankar" , "raji ","karthik", "siva","dsfadf"
  ]



values=signal<number[]>([0])

  constructor(
    private http:HttpClient
  ) {

  }
couter = signal(10)

tenXcounter=computed(()=>{
  const value= this.couter()
  console.log(value)
  return value*10
})
hundrenXcounter=computed(()=>{
  const value= this.tenXcounter()

  return value*10
})


  append(){


this.values.update(values=>([

  ...values,
  values[values.length-1]+1
]))


  }
  ngOnInit(): void {
   console.log("dfsgdfg")

   this.http.get("https://www.boredapi.com/api/activity").subscribe(res=>{
    console.log("res" , res);

   })
   setInterval(() => {
    this.append()
   }, 10000);
  }


}

