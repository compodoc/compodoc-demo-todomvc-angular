import { Component, Input } from '@angular/core';

import { Todo } from '../../models/todo.model';

@Component({
    selector: 'todo',
    templateUrl: './todo.component.html'
})
export class TodoComponent {
    /**
     * The entry todo from the parent list
     */
    @Input() todo: Todo;

    constructor() {
        
    }
}
