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

export type Something = number | string;


/**
 * Some flags
 */
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

/**
 * Directions of the app
 */
export enum Direction {
    Up,
    Down,
    Left,
    Right
}

/*
export let yo:{ [index:string] : {message: string} } = {};
*/
