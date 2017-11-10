import {NgModule} from '@angular/core';
import {AppComponent} from './app1.component';
import {BrowserModule} from '@angular/platform-browser'
import {FormsModule} from '@angular/Forms'
import {EmployeeListComponent} from './employee-list.component'
import {EmployeeFilterPipe} from './employee-filter.pipe'
import {ShortFilter} from './employeesort.pipe'
import {RatingComponent} from './rating.component'
import {EmployeeService} from './employee.service'
import {WelcomeComponent} from './welcome.component'
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
// import {HttpModule} from './@angular/http'


@NgModule({
    // it can have any number of component inside an array 
// then it goes to appcomponet which is aa1.component 
    declarations: [AppComponent, EmployeeListComponent, EmployeeListComponent, EmployeeFilterPipe, RatingComponent, ShortFilter, WelcomeComponent],
    imports : [BrowserModule, FormsModule , HttpModule],
    bootstrap : [AppComponent],
    providers: [EmployeeService]
})

export class AppModule {

}