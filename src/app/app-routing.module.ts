import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearproveedoresComponent } from './component/logeado/crearproveedores/crearproveedores.component';
import { GenerarCertificadoComponent } from './component/logeado/generar-certificado/generar-certificado.component';

const routes: Routes = [
  {
    path: '',
    component: GenerarCertificadoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
