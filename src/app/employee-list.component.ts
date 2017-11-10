import { Component } from '@angular/core';
import {IEmployee } from './IEmployee';
import {OnInit, OnChanges, OnDestroy} from '@angular/core';
import {EmployeeService} from './employee.service'
import { ActivatedRoute } from "@angular/router";

@Component(
    {
        selector: 'app-employees',
        templateUrl: './employee-list.component.html'
        // styleUrls: './'
    }
)


export class EmployeeListComponent  implements OnInit, OnChanges, OnDestroy{
    
    constructor (private _empService: EmployeeService){

    }
    title = 'Employees List';
    Name = 'teferey ';
    Score = 7000;
    appear: boolean = true;
    Show = false ; 
    showOrHide = 'Show';
    listFilter : string  ;
    empList: IEmployee[]; 
    isAdd = false;
    imageurl = 'http://localhost:8082/';
    order: string;
  
    currentEmployee: IEmployee = {
        Id: null,
        Name: "",
        Email: "",
        PhoneNumber: null,
        Status: "",
        Grade: null,
        Salary: null,
        imageUrl: ""
    };


    currentEmployee2: IEmployee = {
        Id: null,
        Name: "",
        Email: "",
        PhoneNumber: null,
        Status: "",
        Grade: null,
        Salary: null,
        imageUrl: ""
    };
    
    currentEmployee3: IEmployee = {
        Id: null,
        Name: "",
        Email: "",
        PhoneNumber: null,
        Status: "",
        Grade: null,
        Salary: null,
        imageUrl: ""
    };

    ngOnInit(): void {
        // writing logic for getting data  from server 
//      get data from service // need to call function getEmployees 

    // this.empList = this._empService.GetEmployees();

    this._empService.getEmployees().subscribe((data: IEmployee[]) => this.empList = data);
    } 

    ngOnDestroy(): void {
        // logic for clean up code 
    }
    ngOnChanges(changes): void {
        // logic when you have two way bindings 
    }

    ToggleImage() : void {
        this.Show = !this.Show;
        this.showOrHide = (this.showOrHide === 'Show') ? 'Hide': 'Show';

    }
    GradeChanged(message): void {
        this.title += message;

    }

    showForm(): void {
        this.isAdd = !this.isAdd;
    }

    addEmployee(): void {
        this._empService.addEmployees(this.currentEmployee)
            .subscribe((data) => console.log(data));
    }

    sort(sortName: string) {
        this.order = sortName;
        console.log(sortName);
    }

    deleteEmp(employee2: IEmployee) {
        this.currentEmployee2 = employee2;
    }
    deleteEmployee(): void {
        this._empService.deleteEmployee(this.currentEmployee.Id)
            .subscribe((data) => { console.log(data) });
    }

    
}