import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';
import { Employee } from '../../model/employee';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrl: './list-employee.component.css'
})
export class ListEmployeeComponent implements OnInit {

  employees: any;

  constructor(private employeeSvc: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeSvc.getAll().subscribe((data: Employee[]) => {
      this.employees = data;
    });
  }

  deleteEmployee(arg0: any) {
    this.employeeSvc.deleteById(arg0).subscribe((data: any) => {
      this.getEmployees();
    });
  }
}
