
import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, query } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routerAnimation', [
      transition('* <=> *', [
        // Initial state of new route
        query(':enter',
          style({
            position: 'fixed',
            width:'100%',
            transform: 'translateX(-100%)'
          }),
          {optional:true}),
        // ¡move page off screen right on leave
        query(':leave',
          animate('500ms ease',
            style({
              position: 'fixed',
              width:'100%',
              transform: 'translateX(100%)'
            })
          ),
        {optional:true}),
        // move page in screen from left to right
        query(':enter',
          animate('500ms ease',
            style({
              /*opacity: 1,*/
              transform: 'translateX(0%)'
            })
          ),
        {optional:true}),
      ])
    ])
  ]
})

export class AppComponent implements OnInit {

  escritura: string = '';

  constructor() {  }

  ngOnInit() {

    document.addEventListener('keyup', (ev) => {

      this.escritura += ev.key;

      if(this.escritura.includes('cv.esp')) {
        alert('Download CV Español');
        this.escritura = '';
      } else if (this.escritura.includes('cv.eng')) {
        alert('Download CV Ingles');
        this.escritura = '';
      }

    });


  }

  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.animation;
  }

}
