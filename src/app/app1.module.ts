import {NgModule} from '@angular/core';
import {AppComponent} from './app1.component';
import {BrowserModule} from '@angular/platform-browser'
import {FormsModule} from '@angular/Forms'
import {EmployeeListComponent} from './employee-list.component'
import {EmployeeFilterPipe} from './employee-filter.pipe'
import {RatingComponent} from './rating.component'


@NgModule({
    // it can have any number of component inside an array 
// then it goes to appcomponet which is aa1.component 
    declarations: [AppComponent, EmployeeListComponent, EmployeeListComponent, EmployeeFilterPipe, RatingComponent],
    imports : [BrowserModule, FormsModule ],
    bootstrap : [AppComponent]
})

export class AppModule {

}