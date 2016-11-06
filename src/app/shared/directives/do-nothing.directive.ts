import { Directive } from '@angular/core';

@Directive({
    selector: '[donothing]'
})
export class DoNothingDirective {
    constructor() {
        console.log('Do nothing directive');
    }
}
