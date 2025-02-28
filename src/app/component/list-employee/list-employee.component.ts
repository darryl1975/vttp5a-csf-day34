import { Component, OnInit, signal } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';
import { Employee } from '../../model/employee';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrl: './list-employee.component.css'
})
export class ListEmployeeComponent implements OnInit {

  employees: any;

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'emailId'];



  constructor(private dialog: MatDialog, private employeeSvc: EmployeeService, private router: Router) { }

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

    // logic for Dialog Popup here
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: {
        messageTxt: "Sure to override record?",
        cancelTxt: "No",
        confirmTxt: "Yes"
      }
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
      if (result) {
        this.employeeSvc.deleteById(arg0).subscribe((data: any) => {
          this.getEmployees();
        });
      }
      else {
        // do nothing
        console.log("User clicked No");
      }
    })



  }

  displayEmployee(arg0: any) {
    this.router.navigate(['/employeeDetails', arg0]);
  }
}
