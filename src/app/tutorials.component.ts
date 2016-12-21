import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component(
{
	selector: 'my-tutorials',
	templateUrl: './app.tutorial.html',
	 styleUrls: ['./app.tutorial.css'],
	 inputs: [`parentData`],
	 outputs: [`childEvent`]

})
export class TutorialComponent{
	xyz = 'First tutorail Page2.'
	public title="Tutorials from new component."
	public fname;
	public lname;
	public showElement = true;
	public color='red';
	public colors=['red','green','blue'];
	public cone=true;
	public ctwo=true;
	 toggle()
		{
			this.cone=!this.cone;
			this.ctwo=!this.ctwo;
		}
		public parentData: string;
		childEvent = new EventEmitter<string>();
		onChange(value:string)
		{
			this.childEvent.emit(value);
		}
	name = 'good morning';
	number = 8.56741
	date =  new Date();
}
