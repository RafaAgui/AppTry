import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('trololo', [
      state('inactive', style({
        transform: 'scale(1)'
      })),
      state('active', style({
        transform: 'scale(1.5)'
      })),
      transition('inactive => active', animate('1000ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})


export class HeaderComponent {
  public state: string = 'inactive';

  constructor(private router: Router) {}
  goToCheckout(): void{
    this.router.navigate(['/checkout']);
  }

  anima(){
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }
}
