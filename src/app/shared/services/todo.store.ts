import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject, ReplaySubject } from 'rxjs';

import { Todo } from '../models/todo.model';

/**
 * This service is a todo store
 */
@Injectable()
export class TodoStore {
    /**
     *  Local array of Todos
     */
    initialTodos: any[] = [];

    todos = new ReplaySubject(1);
    updates = new Subject();
    addTodo = new Subject();

    constructor() {
        let persistedTodos = JSON.parse(localStorage.getItem('angular2-todos') || '[]');
        console.log(persistedTodos);

        this.updates
            .scan((accumulator: Object[], operation: Function) => {
                return operation(accumulator);
            }, this.initialTodos)
            .subscribe(this.todos);

        this.addTodo
            .map((todo) => {
                return (state) => {
                    return state.concat(todo);
                }
            })
            .subscribe(this.updates);

        /*// Normalize back into classes
        this.todos = persistedTodos.map((todo: { _title: String, completed: Boolean }) => {
            let ret = new Todo(todo._title);
            ret.completed = todo.completed;
            return ret;
        });*/
    }

    private updateStore() {
        //localStorage.setItem('angular2-todos', JSON.stringify(this.todos));
    }

    private getWithCompleted(completed: Boolean) {
        //return this.todos.filter((todo: Todo) => todo.completed === completed);
    }

    /**
     *  All the todos are they __completed__ ?
     */
    allCompleted(): any {
        //return this.todos.length === this.getCompleted().length;
    }

    /**
     *  Set all todos status (completed or not)
     */
    setAllTo(completed: Boolean) {
        //this.todos.forEach((t: Todo) => t.completed = completed);
        //this.updateStore();
    }

    /**
     *  Remove completed todos
     */
    removeCompleted() {
        //this.todos = this.getWithCompleted(false);
        //this.updateStore();
    }

    /**
     *  Get remaining todos
     */
    getRemaining() {
        //return this.getWithCompleted(false);
    }

    /**
     *  Get all todos
     */
    getAll() {
        //return this.todos.asObservable();
    }

    /**
     *  Get completed todos
     */
    getCompleted() {
        //return this.getWithCompleted(true);
    }

    /**
     *  Toggle completed todo status
     */
    toggleCompletion(todo: Todo) {
        //todo.completed = !todo.completed;
        //this.updateStore();
    }

    /**
     *  Remove todo
     */
    remove(todo: Todo) {
        //this.todos.splice(this.todos.indexOf(todo), 1);
        //this.updateStore();
    }

    /**
     *  Update store
     */
    update() {
        //this.updateStore();
    }

    /**
     *  Add todo
     */
    add(title: String) {
        //this.todos.next(this.todos.getValue().push(new Todo(title)));
        //this.todos.push(new Todo(title));
        //this.updateStore();
        this.addTodo.next(new Todo(title));
    }
}
