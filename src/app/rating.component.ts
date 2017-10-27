import { Component, Input, OnChanges } from '@angular/core';


@Component({
    selector: 'app-rating',
    templateUrl: './rating.component.html'
})


export class RatingComponent implements OnChanges {


    @Input() rating: number;
    ratingWidth: number;



    ngOnChanges(): void {
        this.ratingWidth = (this.rating * 86) / 100;
    }

}