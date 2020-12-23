import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './components/empleados/formulario/formulario.component';
import { EmpleadosComponent } from './components/empleados/empleados/empleados.component';

const routes: Routes = [
    {
      path:"form",
      component:FormularioComponent
    },
    {
      path:"empleados",
      component:EmpleadosComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
