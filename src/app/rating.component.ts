import { Component, Input, Output, OnChanges, EventEmitter} from '@angular/core';


@Component({
    selector: 'app-rating',
    templateUrl: './rating.component.html',
    styleUrls: ['./rating.component.css']
})   


export class RatingComponent implements OnChanges {


    @Input() rating: number;
    ratingWidth: number;
    @Output() gradeClicked : EventEmitter<string> = new EventEmitter<string>();


    ngOnChanges(): void {
        this.ratingWidth = (this.rating * 86) / 100;  
    }
    GradeClicked(): void {
        debugger;
        this.gradeClicked.emit("Clicked on Employee with grade" + this.rating)
    }
}