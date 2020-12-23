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

  searchEmployee(empleadoName:string){

    // return this.firestore.collection('Empleados', ref => ref.where('nombre', '==', empleadoName))
    //   .valueChanges().pipe().subscribe((data)=>{
    //     console.log(data);
    //   })
    // ref.collection('user').orderBy('name').startAt(name).endAt(name+'\uf8ff')
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
