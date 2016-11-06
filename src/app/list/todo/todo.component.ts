import { Component, Input } from '@angular/core';

import { Todo } from '../../models/todo.model';

import { TodoStore } from '../../services/todo.store';

@Component({
    selector: 'todo',
    templateUrl: './todo.component.html'
})
export class TodoComponent {
    /**
     * The entry todo from the parent list
     */
    @Input() todo: Todo;

    /**
     * Local reference of TodoStore
     */
    todoStore: TodoStore;

    constructor(todoStore: TodoStore) {
		this.todoStore = todoStore;
	}

    remove(todo: Todo){
		this.todoStore.remove(todo);
	}

    toggleCompletion(todo: Todo) {
		this.todoStore.toggleCompletion(todo);
	}
}
