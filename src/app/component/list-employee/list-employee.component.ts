import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';
import { Employee } from '../../model/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrl: './list-employee.component.css'
})
export class ListEmployeeComponent implements OnInit {

  employees: any;

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'emailId'];


  constructor(private employeeSvc: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeSvc.getAll().subscribe((data: Employee[]) => {
      this.employees = data;
    });
  }

  updateEmployee(arg0: any) {
    this.router.navigate(['/employeeUpdate', arg0]);
  }

  deleteEmployee(arg0: any) {
    this.employeeSvc.deleteById(arg0).subscribe((data: any) => {
      this.getEmployees();
    });
  }

  displayEmployee(arg0: any) {
    this.router.navigate(['/employeeDetails', arg0]);
  }
}
