import { Component, Input } from '@angular/core';

import { TodoStore } from '../services/todo.store';

@Component({
    selector: 'header',
    providers: [TodoStore],
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    title = 'todos';

    todoStore: TodoStore;
    @Input() newTodoText: string = '';

    constructor(todoStore: TodoStore) {
		this.todoStore = todoStore;
	}

    addTodo() {
		if (this.newTodoText.trim().length) {
            this.todoStore.add(this.newTodoText);
			this.newTodoText = '';
		}
	}
}
