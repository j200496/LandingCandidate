import { Component } from '@angular/core';
import { ContentComponent } from '../../Shared/content/content.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-p1',
  imports: [ContentComponent,FooterComponent],
  templateUrl: './p1.component.html',
  styleUrl: './p1.component.css'
})
export class P1Component {

}
