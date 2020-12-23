import { Component, OnInit , Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-edit-employee',
  templateUrl: './dialog-edit-employee.component.html',
  styleUrls: ['./dialog-edit-employee.component.css']
})
export class DialogEditEmployeeComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private builder:FormBuilder) {
  }

  ngOnInit(): void {
  }

  editForm = this.builder.group({
    id: this.builder.control(`${this.data.id}`,Validators.required),
    nombre: this.builder.control(`${this.data.nombre}`,Validators.required),
    edad: this.builder.control(`${this.data.edad}`,Validators.required),
    cargo: this.builder.control(`${this.data.cargo}`,Validators.required),
    salario: this.builder.control(`${this.data.salario}`,Validators.required)
  });


  get Nombre(){
    return this.editForm.get('nombre');
  }

  get Edad(){
    return this.editForm.get('edad');
  }

  get Cargo(){
    return this.editForm.get('cargo');
  }

  get Salario(){
    return this.editForm.get('salario');
  }

}
