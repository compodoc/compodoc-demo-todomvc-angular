import { Component } from '@angular/core';

import { TodoStore } from '../shared/services/todo.store';

import { EmitterService } from '../shared/services/emitter.service';

/**
 * The footer component
 */
@Component({
    selector: 'footer',
    providers: [],
    templateUrl: './footer.component.html'
})
export class FooterComponent {
    /**
     * Local reference of TodoStore
     */
    todoStore: TodoStore;
    id: string = 'FooterComponent';
    currentFilter: string = 'all';

    constructor(todoStore: TodoStore) {
		this.todoStore = todoStore;
	}

    removeCompleted() {
		this.todoStore.removeCompleted();
	}

    displayCompleted() {
        this.currentFilter = 'completed';
        EmitterService.get(this.id).emit('displayCompleted');
    }

    displayRemaining() {
        this.currentFilter = 'remaining';
        EmitterService.get(this.id).emit('displayRemaining');
    }

    displayAll() {
        this.currentFilter = 'all';
        EmitterService.get(this.id).emit('displayAll');
    }
}
