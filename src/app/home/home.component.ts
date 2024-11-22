import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styles: `
  .carousel slide{
     width:50%;
     height:auto;

  }
  
  .carousel-inner {
    height:auto;
  }
  

 
  `
})
export class HomeComponent {

}
