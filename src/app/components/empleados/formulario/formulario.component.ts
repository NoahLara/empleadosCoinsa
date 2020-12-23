import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmpleadoService } from '../../../services/empleado.service';
import { Empleados } from '../../../models/empleados.model';
import { MatDialog } from '@angular/material/dialog';

import swal from 'sweetalert';
import { DialogEditEmployeeComponent } from '../../../dailogs/dialog-edit-employee/dialog-edit-employee.component';
import { setActionOptionsFor } from 'sweetalert/typings/modules/state';
import { ok } from 'assert';
import { EventEmitter } from 'events';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  

  empleados:Empleados[] | undefined;

  constructor(
    private builder:FormBuilder,
    private empleadoService:EmpleadoService,
    public dialog: MatDialog){
    
  }
  
  ngOnInit(): void {
   
    this.empleadoService.getEmployees().subscribe((data)=>{
      this.empleados = data.map((e)=>{
        return {
          id: e.payload.doc.id,
          nombre: e.payload.doc.get('nombre'),
          edad: e.payload.doc.get('edad'),
          cargo: e.payload.doc.get('cargo'),
          salario: e.payload.doc.get('salario')
        } as Empleados
      });
    });
  }

  employeeForm = this.builder.group({
    nombre: this.builder.control("",Validators.required),
    edad : this.builder.control("",Validators.required),
    cargo : this.builder.control("",Validators.required),
    salario : this.builder.control("",Validators.required)
  });

  get employeeName(){
    return this.employeeForm.get("nombre");
  };
  get employeeAge(){
    return this.employeeForm.get("edad");
  }
  get employeePosition(){
    return this.employeeForm.get("cargo");
  }
  get employeeSalary(){
    return this.employeeForm.get("salario");
  }

  openDialog(objEmpleado:Empleados):void{
    const dialogRef = this.dialog.open(DialogEditEmployeeComponent,{data:objEmpleado,disableClose: true});
    dialogRef.afterClosed().subscribe((result)=>{
      if(result!=="false"){
        this.editEmployee(result);
      }
    })
  }

  buscar(event:any){
    this.empleadoService.searchEmployee(event.target.value)
  }

  createEmployee():void{
    this.empleadoService.createEmployee(this.employeeForm.value)
      .then((data)=>{
        swal("Empleado Creado","Exitosamente","success");
        this.employeeForm.reset(); 
      })
  }

  deleteEmpleado(empleado:Empleados){

    swal({
        title:"¿Está seguro de eliminar al empleado: "+empleado.nombre,
        text:"Una vez eliminado no se podrá recuperar esta información",
        icon:"warning",
        buttons: { 
          cancel: true,
          New: { 
                text: "Eliminar al empleado: "+empleado.nombre,
                value: "delete"
              }
        }
      })
    .then((respuesta) => {
      if (respuesta=="delete") {
        this.empleadoService.deleteEmployee(empleado)
        .then(()=>{
          swal("Empleado Eliminado","Eliminando","success");    
        });
      }
    });


  }

  resetEmployeeForm():void{
    this.employeeForm.reset();
    swal("Los campos han sido Limpieados","..:Limpiando:..","success");
  }

  editEmployee(objUpdated:Empleados):void{
    this.empleadoService.updateEmployee(objUpdated)
    .then((result)=>{
      swal("Datos Modificados Correctamente!","EMPLEADO MODIFICADO","success");
    });
  }
}
