import { Component } from '@angular/core';
import {IEmployee } from './IEmployee';
import {OnInit, OnChanges, OnDestroy} from '@angular/core';
@Component(
    {
        selector: 'app-employees',
        templateUrl: './employee-list.component.html'
        // styleUrls: './'
    }
)


export class EmployeeListComponent  implements OnInit, OnChanges, OnDestroy{
    

    title = 'Employees List';
    Name = 'teferey ';
    Score = 7000;
    appear: boolean = true;
    Show = false ; 
    showOrHide = 'Show';
    listFilter : string  ;
    empList: IEmployee[] = [{
        Id: null,
        Name: 'Tenzin ',
        Email: 'tenIn@gmail.com',
        PhoneNumber: 9723456767,
        Status: 'green card ',
        Grade: 30,
        Salary: 9000,
        ImageUrl: '../assets/Emp1.jpeg'
    },

    {
        Id: null,
        Name: 'Teferry ',
        Email: 'tenIn@gmail.com',
        PhoneNumber: 9723456767,
        Status: 'green card ',
        Grade: 70,
        Salary: 6000,
        ImageUrl: '../assets/Emp2.jpeg'
    },

    {
        Id: null,
        Name: 'gopal ',
        Email: 'tenIn@gmail.com',
        PhoneNumber: 9723456767,
        Status: 'green card ',
        Grade: 70,
        Salary: 8000,
        ImageUrl: '../assets/Emp3.jpeg'
    }];

    ngOnInit(): void {
        // writing logic for getting data  from server 


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

    
}