import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './header.component.html',
  styles: `
marquee{
  color:#EEEEEE;
  background-color:#800000;
  height:30px;
  text-align:center;
  font-size:15px;
  font-style:Serif;
  padding:5px;
}


  `
})
export class HeaderComponent{

  
  
}
