import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name : 'EmployeeFilter' // this is the name of pipe 
})

export class EmployeeFilterPipe implements PipeTransform{
    transform(emplist: any[], filterBy: string): any[] {
        filterBy = (filterBy) ? filterBy.toLocaleLowerCase(): null;
        
        return (filterBy) ? emplist.filter(function (emp) {
            return (emp.Name.toLocaleLowerCase().indexOf(filterBy) !== -1);
        }): emplist; 
    }

}  