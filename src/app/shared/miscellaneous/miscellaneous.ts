/**
 * PI constant
 * See {@link Todo} for service using it
 */
export const PI:number = 3.14;

/**
 * PIT let
 * See {@link Todo} for service using it
 */
export let PIT:number = 4;


/**
 * A foo bar function
 *
 * @param {string} status A status
 */
export function foo(status: string) {
    console.log('bar');
}

export class StringIndexedItems<T> {
  [index: string]: T;
}

export interface InterfaceWithIndexable<T> {
  [yala: string]: T;
}

export let yo:{ [index:string] : {message: string} } = {};
