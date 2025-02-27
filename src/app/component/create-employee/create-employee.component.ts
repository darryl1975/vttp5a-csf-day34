import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from '../../service/employee.service';
import { NodeWithI18n } from '@angular/compiler';
import { Employee } from '../../model/employee';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent implements OnInit {
  form!: FormGroup;
  employee!: Employee;

  constructor(private employeeSvc: EmployeeService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl('')
    });
  }

  postEmployee() {
    console.log('Form Post');

    this.employee = this.form.value;
    console.log(this.employee);

    this.saveEmployee();
  }

  saveEmployee() {
    this.employeeSvc.create(this.employee).subscribe(
      (data) => {
        console.log('Employee Saved');
      });
  }
}
