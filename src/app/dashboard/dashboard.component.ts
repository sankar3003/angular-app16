import { Component } from '@angular/core';
import { GlobalService } from '../global.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCount } from '../states/counter/counter.selector';
import { AppState } from '../states/app.state';
import { increment } from '../states/counter/counter.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
count$:Observable<number>
searchTerm:any=""
myForm: any={
searchTerm:"",
nameval:""
};


  constructor(private globalService: GlobalService,
    private store:Store<AppState>
  ) {
    this.count$ = this.store.select(selectCount)
  }
  empData: any    // To store our employee data
  term: any     // for search bar

  p: any = 1;   // these both for pagination, count represents number of rows per page
  count: any = 5;

onSubmit(){
  console.log("form submitted" , this.myForm);

}
  ngOnInit(): void {
    this.globalService.getRecords("Employees").subscribe((res) =>
      // console.log(res)
      this.empData = res   // Get all records on screen
    )
  }

  delete(id:any){

    this.globalService.deleteRecord("Employees",id).subscribe((res) =>{
      console.log("ree");


    })
  }
}
