import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  myValue:string= 'this is product';
  myPrice:string =  'this is different'
  price1:number = 20000
  price2:number = 35000;
}
