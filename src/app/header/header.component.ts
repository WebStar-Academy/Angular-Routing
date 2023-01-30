import { Component } from '@angular/core';

@Component({
  template : `
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quis unde tenetur a sint debitis aperiam nulla omnis, harum reiciendis, corporis officia soluta obcaecati eveniet quae necessitatibus? Soluta, voluptatum asperiores!</p>
  `,
  styles : [`
    p { 
      font-size: 20px;
      color: red;
    }
  `],
  selector : 'app-header'
})
export class HeaderComponent {
  
}