/**
 * The todo class
 */
export class Todo {
    /**
     * Completed status
     */
    completed: Boolean;
    /**
     * Editing status
     */
    editing: Boolean;

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
