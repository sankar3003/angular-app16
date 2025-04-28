import { Component } from '@angular/core';
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  ngOnInit(): void {}
  constructor(private service : GlobalService, private router: Router) {}

  addData(data:any){
    const empObj = {
      name: data.fname,
      post: data.epost,
      salary: data.salary,
      address: data.ecity
    }
console.log("dff" , empObj);

    this.service.addRecord("Employees",empObj).subscribe( () => {
      alert("Record Added")
      this.router.navigate(['/dashboard'])  // After successfull insertion of data, go back to home page automatically
    })
  }
}
