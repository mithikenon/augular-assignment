import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InformationComponent } from './information/information.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';



const routes: Routes = [
  {
    path: '', redirectTo: '/Login', pathMatch: 'full'},
    {path: 'Login', component : LoginComponent},
    {path: 'registration', component : RegistrationComponent},
    {path: 'dashboard', component : DashboardComponent},
    {path: 'information', component : InformationComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { RegistrationComponent ; DashboardComponent ; InformationComponent ; }
