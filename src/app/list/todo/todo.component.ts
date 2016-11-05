import { Component, Input } from '@angular/core';

import { Todo } from '../../models/todo.model';

@Component({
    selector: 'todo',
    templateUrl: './todo.component.html'
})
export class TodoComponent {
    @Input() todo: Todo;

    constructor() {
        console.log('TodoComponent: ', this.todo);
    }
}
