import { Component, OnInit } from '@angular/core';
import { IEmployee } from './IEmployee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from "./employee.service";

@Component({
    templateUrl: 'employee-details.component.html',
    providers: [EmployeeService]
})

//ActivateRoute: It gives the current route Url.In Employee-details component when we click on the hyper link,
// it activates the Url like '/id'.So, if we need that id then we need this ActivateRoute.
export class EmployeeDetailsComponent implements OnInit {
    title = 'Employee Name';
    employee: IEmployee;

    color: string;
    imageUrl1 = 'http://localhost:8082/';

    constructor(private _route: ActivatedRoute, private _employeeService: EmployeeService) {

    }

    //It has property i.e snapshot which has params(i.e can fetch parameters from the Url).
    ngOnInit() {
        let id = this._route.snapshot.params['id'];
        this.getEmployee(id);
    }

    // getEmployee(id: number){
    //    this._employee.getEmployee(id).subscribe((data) => {
    //        this.employee = data[0]},
    //     (error) => console.log(error));
    // }

    getEmployee(id: number) {
        
        this._employeeService.getEmployee(id).subscribe((data) => {
            this.employee = data[0];
            console.log(data[0]);
            if (data[0].Grade >= 90) {
                this.color = 'green';
            }
            else if (data[0].Grade >= 80) {
                this.color = 'orange';
            }
            else {
                this.color = 'red';
            }
        },
            (error) => console.log(error));
    }

    displayGrade(message: string): void {
        this.title = message + 'and his name is';
    }
}