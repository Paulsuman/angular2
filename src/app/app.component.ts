import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent {
  title = 'app works good!!!';
  public childData: string;
  myName = "Raj"
  myEmail = "Raj@gmail.com"
  onSubmit(value:any){
  	console.log(value);
  }
}
