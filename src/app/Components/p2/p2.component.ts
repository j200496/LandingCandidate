import { Component } from '@angular/core';
import { ContentComponent } from '../../Shared/content/content.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-p2',
  imports: [ContentComponent,FooterComponent],
  templateUrl: './p2.component.html',
  styleUrl: './p2.component.css'
})
export class P2Component {

}
