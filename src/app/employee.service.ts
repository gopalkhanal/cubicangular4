
import {IEmployee} from './IEmployee';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class EmployeeService{

    private _url = 'http://localhost:8082/';
    
        constructor(private _http: Http) {
    
        }
    
        
        getEmployees(): Observable<IEmployee[]> {
         
            return this._http.get(this._url + 'employees')
              
                .map((response: Response) => <IEmployee[]>response.json())
                
                .do((data) => console.log(data));
        }


        addEmployees(employee: IEmployee): Observable<String> {
        //Here, employee is javascript object so, stringify it to json object to send the data.

        //Header: It is just a metadata, when we get or post some data to server. 
        //({'Content-type': 'Application/JSON'}): It means what type of data and that is Application/JSON here.
        const header = new Headers({ 'Content-type': 'Application/JSON' });

        //This request takes/carry the metadata(i.e header).It specifies what type of request we are making to the server.
        const requestOptions = new RequestOptions({ headers: header });
        return this._http.put(this._url + 'employees', JSON.stringify(employee), requestOptions)
            //Converting response to string since the return type is string.
            .map((response: Response) => response.toString())
            .do((data) => console.log(data));
    }





    // empList: IEmployee[] = [{
    //     Id: null,
    //     Name: 'Tenzin ',
    //     Email: 'tenIn@gmail.com',
    //     PhoneNumber: 9723456767,
    //     Status: 'green card ',
    //     Grade: 30,
    //     Salary: 9000,
    //     ImageUrl: '../assets/Emp1.jpeg'
    // },

    // {
    //     Id: null,
    //     Name: 'Teferry ',
    //     Email: 'tenIn@gmail.com',
    //     PhoneNumber: 9723456767,
    //     Status: 'green card ',
    //     Grade: 70,
    //     Salary: 6000,
    //     ImageUrl: '../assets/Emp2.jpeg'
    // },

    // {
    //     Id: null,
    //     Name: 'gopal ',
    //     Email: 'tenIn@gmail.com',
    //     PhoneNumber: 9723456767,
    //     Status: 'green card ',
    //     Grade: 70,
    //     Salary: 8000,
    //     ImageUrl: '../assets/Emp3.jpeg'
    // }];

    GetEmployees(): string{
        // return this.empList;
        return "employee inserted successfully";
    }

    InsertEmployee(): string {
        return "employee inserted successfully";
    }

    deleteEmployee(Id): Observable<string> {
        return this._http.delete(this._url + 'employees/' + Id)
            .map((respose: Response) => respose.toString())
            .do((data) => console.log(data));
    }

    UpdateEmployee(): string {
        return "employee updated successfully";

    }


    getEmployee(id): Observable<IEmployee> {
        return this._http.get(this._url + 'employees/' + id)
            .map((response: Response) => <IEmployee>response.json())
            .do((data) => console.log(data));
    }
}