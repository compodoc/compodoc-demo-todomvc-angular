import { Component } from '@angular/core';

import { TodoStore } from '../services/todo.store';

@Component({
    selector: 'footer',
    providers: [TodoStore],
    templateUrl: './footer.component.html'
})
export class FooterComponent {
    /**
     * Local reference of TodoStore
     */
    todoStore: TodoStore;

    constructor(todoStore: TodoStore) {
		this.todoStore = todoStore;
	}

    removeCompleted() {
		this.todoStore.removeCompleted();
	}
}
