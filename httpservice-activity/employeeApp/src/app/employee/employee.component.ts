import { Component } from '@angular/core';
import { EmployeeprocessService } from '../employeeprocess.service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  employeeobj: Employee = new Employee();

  constructor(private empserviceobj: EmployeeprocessService) {}

  showdetails(): void {
    this.empserviceobj.showData().subscribe((data) => {
      console.log(data); // Handle data as per your requirement
    });
  }

  addUser(): void {
    this.empserviceobj.addUser(this.employeeobj).subscribe((data) => {
      console.log(data); // Handle data as per your requirement
    });
  }
}
