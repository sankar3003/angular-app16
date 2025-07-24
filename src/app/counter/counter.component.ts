import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../states/app.state';
import { AppComponent } from '../app.component';
import { selectCount } from '../states/counter/counter.selector';
import { decrement, increment, reset } from '../states/counter/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {


  count$:Observable<number>

  constructor(private store:Store<AppState>){
this.count$ = this.store.select(selectCount)
  }

  increment(){
    this.store.dispatch(increment())
  }
  decre(){
    this.store.dispatch(decrement())
  }
  reset(){
    this.store.dispatch(reset())
  }
}
