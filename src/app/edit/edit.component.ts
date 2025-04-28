import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  id: any
  empData: any

  constructor(private route: ActivatedRoute, private service: GlobalService, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((para) => {
      this.id = para.get('id') 
      console.log(this.id)    // Obtain the ID and retrieve the record for updation
      this.service.getRecord("Employees",this.id).subscribe((res) => {
        this.empData = {...res}    // Doing this will store the data in object format
      })
    })
  }

  putData(val:any){
    const emp = {
      id: this.id,   // SAME ID
      name: val.fname,   // OLD VALUES
      post: val.post,
      salary: val.salary,
      address: val.address
    }
debugger
    this.service.updateRecord("Employees",emp).subscribe(()=>{
      alert("Record Updated")
      this.router.navigate(['/dashboard'])
    })
  }
}
