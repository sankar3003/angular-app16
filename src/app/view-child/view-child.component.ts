import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';
import { CoutingComponent } from './couting/couting.component';
import { Couting2Component } from './couting2/couting2.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit, AfterViewInit{
@ViewChild("couting") child!:CoutingComponent  ;
@ViewChild("couting2") child2!:  Couting2Component;
constructor(){

}
  ngAfterViewInit() {

  }

ngOnInit() {
  
}

increment(){
  this.child.increment()
  this.child2.increment()

}
decrement(){
this.child.decrement()
this.child2.decrement()
}

}
