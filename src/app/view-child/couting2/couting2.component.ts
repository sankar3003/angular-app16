import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-couting2',
  standalone: false,

  template: `<p>couting2 works!</p>`,
  styleUrls: ['./couting2.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Couting2Component {
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
