import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Empleados } from '../models/empleados.model'; 

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private firestore:AngularFirestore){

  }

  getEmployees(){
    return this.firestore.collection('Empleados').snapshotChanges();
  }

  createEmployee(empleado:Empleados){
    return this.firestore.collection('Empleados').add(empleado);
  }

  updateEmployee(empleado:Empleados){
    return  this.firestore.doc('Empleados/'+empleado.id).update(empleado);
  }

  deleteEmployee(empleado:Empleados){
    return this.firestore.doc('Empleados/'+empleado.id).delete();
  }

}
