import { AfterContentChecked, AfterContentInit, AfterViewInit, ChangeDetectionStrategy, Component, ContentChild, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements AfterViewInit, AfterContentInit {

  @ViewChild('Template',{static : false}) Template : ElementRef | undefined

  @ContentChild('ContentProjectionTemplate',{static : false}) ContentProjectionTemplate : ElementRef | undefined;


  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit")
    console.log(this.Template); // Refer to -> Element Ref -> some object
    console.log(this.ContentProjectionTemplate); // Refer to -> Element Ref -> some object
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit")
    console.log(this.Template); // Refer to -> undefined
    console.log(this.ContentProjectionTemplate);// Refer to -> Element Ref -> some object
  }
  
}
 