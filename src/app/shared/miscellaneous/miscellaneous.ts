/**
 * PI constant
 * See {@link Todo} for service using it
 */
export const PI:number = 3.14;

export let PIT = 4;

export type Something = number | string;

export type Flags = {
    option1: boolean;
    option2: boolean;
}

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

export enum Direction {
    Up,
    Down,
    Left,
    Right
}

/*
export let yo:{ [index:string] : {message: string} } = {};
*/
