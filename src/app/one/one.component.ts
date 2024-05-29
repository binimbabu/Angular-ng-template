import { Component } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent {
  booleanValue:boolean= true;
  getValue(){
    this.booleanValue = !this.booleanValue;
  }

}
