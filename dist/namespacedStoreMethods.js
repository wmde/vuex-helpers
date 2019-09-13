"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param namespacesAndName namespace1, namespace2, ..., mutationOrActionOrGetterName
 */
function namespaceJoin(...namespacesAndName) {
    return namespacesAndName.join('/');
}
/**
 * Format the name of an action namespaced inside a store module
 */
exports.action = namespaceJoin;
/**
 * Format the name of a mutation namespaced inside a store module
 */
exports.mutation = namespaceJoin;
/**
 * Format the name of a getter namespaced inside a store module
 */
exports.getter = namespaceJoin;
