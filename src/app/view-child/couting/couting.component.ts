import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-couting',
  standalone: false,
   template: `<p>couting works!



  </p>
`,
  styleUrls: ['./couting.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoutingComponent {

counter:number= 0;

  constructor(){

  }

  increment(){
this.counter++

  }
  decrement(){
this.counter--
  }
 }
