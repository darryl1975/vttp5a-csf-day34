import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../model/employee';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent implements OnInit {
  form!: FormGroup;

  employee: Employee = new Employee();
  id!: number;

  constructor(private employeeSvc: EmployeeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      emailId: new FormControl('')
    });

    this.id = this.route.snapshot.params['id'];
    this.employeeSvc.getById(this.id).subscribe((data: any) => {
      this.employee = data;
      this.form.patchValue(this.employee);
    }, (error: any) => console.log(error));

  }

  updateEmployee() {

    this.employeeSvc.updateById(this.id, this.form.value).subscribe((data: any) => {
      this.router.navigate(['/employeeList']);
    },
      (error: any) => console.log(error));
  }

}
