import { Component } from '@angular/core';
import { ContentComponent } from '../../Shared/content/content.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-prop',
  imports: [ContentComponent,FooterComponent],
  templateUrl: './prop.component.html',
  styleUrl: './prop.component.css'
})
export class PropComponent {

}
