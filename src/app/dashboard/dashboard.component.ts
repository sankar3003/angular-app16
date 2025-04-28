import { Component } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private globalService: GlobalService) {}
  empData: any    // To store our employee data
  term: any     // for search bar

  p: any = 1;   // these both for pagination, count represents number of rows per page
  count: any = 5;

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
