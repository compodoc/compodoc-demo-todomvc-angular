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
    template: `
    <div class="footer" *ngIf="todoStore.todos.length > 0">
        <span class="todo-count"><strong>{{todoStore.getRemaining().length}}</strong> {{todoStore.getRemaining().length == 1 ? 'item' : 'items'}} left</span>
        <ul class="filters">
    		<li>
    			<a class="selected btn-filter" [class.selected]="currentFilter === 'all'"  (click)="displayAll()">All</a>
    		</li>
    		<li>
    			<a class="btn-filter" [class.selected]="currentFilter === 'remaining'" (click)="displayRemaining()">Active</a>
    		</li>
    		<li>
    			<a class="btn-filter"  [class.selected]="currentFilter === 'completed'" (click)="displayCompleted()">Completed</a>
    		</li>
    	</ul>
        <button class="clear-completed" *ngIf="todoStore.getCompleted().length > 0" (click)="removeCompleted()">Clear completed</button>
    </div>
`
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
    id: string = 'FooterComponent';
    /**
     * Starting filter param
     */
    @LogPropertyWithArgs('theCurrentFilter')
    currentFilter: string = 'all';

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
