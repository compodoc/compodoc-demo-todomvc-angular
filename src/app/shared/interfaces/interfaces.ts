/**
 * Just for Compodoc feature demo
 */
export interface superString {
    name: string;
}

/**
 * An interface just for documentation purpose
 */
export interface LabelledTodo {
    title: string;
    completed: boolean;
    editing?: boolean;
    readonly x: number;
}

/**
 * A function type interface just for documentation purpose
 * ```typescript
 * let mySearch: SearchFunc;
 * mySearch = function(source: string, subString: string) {
 *     let result = source.search(subString);
 *     if (result == -1) {
 *         return false;
 *     }
 *     else {
 *         return true;
 *     }
 * }
 * ```
 */
interface SearchFunc {
    (source: string, subString: string): boolean;
}

/**
 * A indexable interface just for documentation purpose
 * ```typescript
 * let myArray: StringArray;
 * myArray = ["Bob", "Fred"];
 * ```
 */
interface StringArray {
    [index: number]: string;
}
