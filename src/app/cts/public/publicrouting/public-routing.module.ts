import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../../public/components/login/login.component';

const publicRoutes: Routes = [
  {
    path: 'login', component: LoginComponent, pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
]

@NgModule({
  imports: [RouterModule.forChild(publicRoutes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
