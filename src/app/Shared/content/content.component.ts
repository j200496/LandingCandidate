import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
@Input() titulo!:string;
@Input() p1!:string;
@Input() p2!:string;
@Input() pic!:string;
}
