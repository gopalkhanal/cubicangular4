import{Pipe, PipeTransform} from '@angular/core';
import { IEmployee } from "./IEmployee";


@Pipe({
    name : 'orderBy' // this is the name of pipe 
})

export class ShortFilter{
    transform(value:IEmployee, sortBy:string){
        //return (sortBy) ? value.sort((emp:IEmployee)=>);
    }
}