import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'firstUpper'
})
export class FirstUpperPipe implements PipeTransform {
    transform(value, args) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
}
