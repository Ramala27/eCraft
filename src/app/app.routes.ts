import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


export const routes: Routes = [
    {path:'home', component:HomeComponent },
    {path:'header', component:HeaderComponent},
    {path:'login',component:LoginComponent},
    {path:'register', component:RegisterComponent},
    {path:'', redirectTo:'/home', pathMatch:'full'}
];
