import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class Child2Component  implements OnChanges {


  
  @Input() person:any
  ngOnChanges(changes: SimpleChanges): void {
    console.log("cf" , changes
    );
    
  }

}
