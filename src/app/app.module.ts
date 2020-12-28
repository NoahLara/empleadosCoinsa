import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmpleadosComponent } from './components/empleados/empleados/empleados.component';
import { FormularioComponent } from './components/empleados/formulario/formulario.component'; 


//Material Design
import { MaterialModule } from './material/material.module';
import { environment } from 'src/environments/environment.prod';


//Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { DialogEditEmployeeComponent } from './dailogs/dialog-edit-employee/dialog-edit-employee.component';


@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    FormularioComponent,
    DialogEditEmployeeComponent
  ],
  entryComponents:[
    DialogEditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
