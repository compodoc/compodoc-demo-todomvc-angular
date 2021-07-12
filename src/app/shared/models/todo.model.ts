import { superString } from '../interfaces/interfaces';

import { Direction } from '../enums/enum';

/**
 * The todo class
 *
 * See {@link TodoStore} for service using it
 */
export class Todo {
    /**
     * Completed status
     */
    completed: boolean;
    /**
     * Editing status
     */
    editing: boolean;

    /**
     * Just for Compodoc feature demo
     */
    oneProperty: superString;

    dir: Direction = Direction.Left;

    /**
     * Another private property
     */
    #newprivateproperty: boolean = false;

    #clicked() {
        this.editing = true;
    }

    /**
     * Title
     */
    private _title: string;
    get title() {
        return this._title;
    }
    set title(value: string) {
        this._title = value.trim();
    }

    static classMethod() {
        return 'hello';
    }

    constructor(title: string) {
        this.completed = false;
        this.editing = false;
        this.title = title.trim();
    }

    /**
     *  fakeMethod !!
     */
    fakeMethod(): boolean {
        return true;
    }
}
