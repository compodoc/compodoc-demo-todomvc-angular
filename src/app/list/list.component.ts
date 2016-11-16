import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { TodoStore } from '../shared/services/todo.store';

import { EmitterService } from '../shared/services/emitter.service';

import { Todo } from '../shared/models/todo.model';

/**
 * The list of todos component
 */
@Component({
    selector: 'list',
    providers: [],
    templateUrl: './list.component.html'
})
export class ListComponent {
    /**
     * Local reference of TodoStore
     */
    todoStore: TodoStore;
    todos: any = [];

    constructor(todoStore: TodoStore) {
        let that = this;
		this.todoStore = todoStore;

        this.todoStore.todos
            .subscribe((data) => {
                console.log(data);
                this.todos = data;
            });

        //this.todos = todoStore.getAll();
        EmitterService.get('FooterComponent').subscribe((value) => {
            console.log(value);
            switch (value) {
                case 'displayCompleted':
                    //that.todos = todoStore.getCompleted();
                    break;
                case 'displayAll':
                    //that.todos = todoStore.getAll();
                    break;
                case 'displayRemaining':
                    //that.todos = todoStore.getRemaining();
                    break;
            }
        });
	}
}
