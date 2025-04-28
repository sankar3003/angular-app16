import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
   httpOptions:any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    
    })
  };
  baseURL:string = "http://localhost:3000"   // where our data is stored in JSON server
  constructor(private http: HttpClient) { }   // Injected HTTP Client

  getRecords(table: string){       // READ records
    const url = `${this.baseURL}/${table}`;
    return this.http.get(url);
  }

  addRecord(table:any, empData: any){   // CREATE records
    const url = `${this.baseURL}/${table}`;
    return this.http.post(url,empData, this.httpOptions)
  }

  getRecord(table:any, id:any){      // READ a SINGLE record
    const url = `${this.baseURL}/${table}/${id}`
    return this.http.get(url)
  }

  updateRecord(table:any, empData:any){ 
    // UPDATE a record
    console.log('empdata', empData)
    debugger
    const url = `${this.baseURL}/${table}/${empData.id}`
    return this.http.put(url, empData, this.httpOptions)
  }

  deleteRecord(table:any, id:any){    // DELETE a record
    const url = `${this.baseURL}/${table}/${id}`;
    return this.http.delete(url)
  }

// We will see this later; for now ignore this
  login(user:any){
    sessionStorage.setItem("userkey",user)
  }
  logout(){
    sessionStorage.removeItem("userkey")
  }
}
