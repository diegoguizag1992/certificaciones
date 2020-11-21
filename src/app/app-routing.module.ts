import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearproveedoresComponent } from './component/logeado/crearproveedores/crearproveedores.component';

const routes: Routes = [
  {
    path: '',
    component: CrearproveedoresComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
