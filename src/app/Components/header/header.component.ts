import { Component,inject, OnDestroy } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  implements OnDestroy{
private sub: Subscription = new Subscription();
router = inject(Router);

constructor() {
this.router.events.subscribe(event => {
  if(event instanceof NavigationEnd){
   const navbar = document.querySelector('.navbar-collapse.show') as HTMLElement
  if(navbar){
    navbar.classList.remove('show');
  }
  };
})
  
}
ngOnDestroy(): void {
this.sub.unsubscribe();  

}
}
