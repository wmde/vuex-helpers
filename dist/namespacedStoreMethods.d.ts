/**
 * @param namespacesAndName namespace1, namespace2, ..., mutationOrActionOrGetterName
 */
declare function namespaceJoin(...namespacesAndName: string[]): string;
/**
 * Format the name of an action namespaced inside a store module
 */
export declare const action: typeof namespaceJoin;
/**
 * Format the name of a mutation namespaced inside a store module
 */
export declare const mutation: typeof namespaceJoin;
/**
 * Format the name of a getter namespaced inside a store module
 */
export declare const getter: typeof namespaceJoin;
export {};
