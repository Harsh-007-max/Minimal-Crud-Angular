import { Component } from '@angular/core';
import { Employee } from './employee';
import { ApiEmployeesService } from './api-employees.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  employee: Employee = new Employee();
  Employees: Employee[] = [];
  constructor(private api_Employee: ApiEmployeesService) { }
  idToUpdate: Number = 0;
  ngOnInit() {
    this.api_Employee.getAllEmployees().subscribe((response: any) => {
      this.Employees = response;
    });
  }

  clearEmployee() {
    this.employee = new Employee();
  }
  selectEmployee(id: Number) {
    this.api_Employee.getById(id).subscribe((response: any) => {
      this.employee = response;
      this.idToUpdate = Number(this.employee.EmployeeID);
    });
  }
  updateEmployee() {
    this.api_Employee.updateEmployee(this.employee).subscribe((response) => {
      this.ngOnInit();
      this.clearEmployee();
    });
  }
  insertEmployee() {
    let data = {
      Name: this.employee.Name,
      Description: this.employee.Description,
      Position: this.employee.Position,
      Salary: this.employee.Salary,
    };
    console.log(data);
    this.api_Employee.insertEmployee(data).subscribe((response) => {
      this.ngOnInit();
      this.clearEmployee();
    });
  }
  deleteEmployee(id:Number) {
    console.log(this.employee.EmployeeID)
    this.api_Employee
      .deleteEmployee(id)
      .subscribe((response) => {
        this.ngOnInit();
      });
  }
}
