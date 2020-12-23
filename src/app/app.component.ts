import { Component } from '@angular/core';
import { Form, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Builder } from 'protractor';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Empleados';
}
