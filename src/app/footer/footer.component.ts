import { Component } from '@angular/core';

import { TodoStore } from '../shared/services/todo.store';

import { EmitterService } from '../shared/services/emitter.service';

import { LogMethod, LogProperty, LogPropertyWithArgs, LogClass } from '../shared/decorators/log.decorator';

/**
 * The footer component
 */
@LogClass
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
    /**
     * Local id for EmitterService
     */
    @LogProperty
    id = 'FooterComponent';
    /**
     * Starting filter param
     */
    @LogPropertyWithArgs('theCurrentFilter')
    currentFilter = 'all';

    /**
     * The "constructor"
     *
     * @param {TodoStore} todoStore A TodoStore
     */
    constructor(todoStore: TodoStore) {
        this.todoStore = todoStore;
    }

    /**
     * Removes all the completed todos
     */
    @LogMethod
    removeCompleted() {
        this.todoStore.removeCompleted();
        switch (this.currentFilter) {
            case 'completed':
                EmitterService.get(this.id).emit('displayCompleted');
                break;
            case 'remaining':
                EmitterService.get(this.id).emit('displayRemaining');
                break;
            case 'all':
                EmitterService.get(this.id).emit('displayAll');
                break;
        }
    }

    /**
     * Display only completed todos
     */
    displayCompleted() {
        this.currentFilter = 'completed';
        EmitterService.get(this.id).emit('displayCompleted');
    }

    /**
     * Display only remaining todos
     */
    displayRemaining() {
        this.currentFilter = 'remaining';
        EmitterService.get(this.id).emit('displayRemaining');
    }

    /**
     * Display all todos
     */
    displayAll() {
        this.currentFilter = 'all';
        EmitterService.get(this.id).emit('displayAll');
    }
}
