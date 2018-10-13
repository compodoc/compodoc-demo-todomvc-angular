export type Something = number | string; // 166 - UnionType + types

export type Name = string; // 136 - StringKeyword + rien

/**
 * Some flags
 */
export type Flags = {
    option1: boolean;
    option2: boolean;
}; // 163 - TypeLiteral + members

export type NameResolver = () => string; // 160 - FunctionType + type (string) +
