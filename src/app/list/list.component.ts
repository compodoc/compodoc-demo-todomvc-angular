import { Component } from '@angular/core';

import { TodoStore } from '../services/todo.store';

@Component({
    selector: 'list',
    providers: [TodoStore],
    templateUrl: './list.component.html'
})
export class ListComponent {
    todoStore: TodoStore;

    constructor(todoStore: TodoStore) {
		this.todoStore = todoStore;
	}
}
