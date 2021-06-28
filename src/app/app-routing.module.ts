import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsdetayComponent } from './isdetay/isdetay.component';
import { ListeComponent } from './liste/liste.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  
  {path:'', component:ListeComponent},
  {path:'isdetay/:id',component:IsdetayComponent},
  {path:'profile',component:ProfileComponent},
  {path:'login',component:LoginComponent},
  {path:'**',redirectTo:''}
  
  
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
