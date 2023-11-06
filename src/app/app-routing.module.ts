import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigupComponent } from './sigup/sigup.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'sigup',component: SigupComponent},
  {path: 'login',component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
