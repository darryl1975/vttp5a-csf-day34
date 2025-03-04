import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from '../../service/employee.service';
import { NodeWithI18n } from '@angular/compiler';
import { Employee } from '../../model/employee';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent implements OnInit {
  form!: FormGroup;
  employee!: Employee;

  constructor(private employeeSvc: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      emailId: new FormControl('')
    });
  }

  postEmployee() {
    console.log('Form Post');

    this.employee = this.form.value;
    console.log(this.employee);

    this.saveEmployee();

    this.router.navigate(['/employeeList']);
  }

  saveEmployee() {
    this.employeeSvc.create(this.employee).subscribe(
      (data) => {
        console.log('Employee Saved');
      });
  }
}
