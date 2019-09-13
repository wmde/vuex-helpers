/**
 * @param namespacesAndName namespace1, namespace2, ..., mutationOrActionOrGetterName
 */
function namespaceJoin( ...namespacesAndName: string[] ): string {
	return namespacesAndName.join( '/' );
}

/**
 * Format the name of an action namespaced inside a store module
 */
export const action = namespaceJoin;

/**
 * Format the name of a mutation namespaced inside a store module
 */
export const mutation = namespaceJoin;

/**
 * Format the name of a getter namespaced inside a store module
 */
export const getter = namespaceJoin;
