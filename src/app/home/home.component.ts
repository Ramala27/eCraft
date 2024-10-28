import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styles: `
  .carousel slide{
     width:80%;
     height:650px;

  }
  
  .carousel-inner {
    height:550px;
  }
  

 
  `
})
export class HomeComponent {

}
