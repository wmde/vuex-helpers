import { ActionTree, GetterTree, MutationTree, Store } from 'vuex';
declare type HotUpdatableStoreProperties = {
    getters?: GetterTree<any, any>;
    mutations?: MutationTree<any>;
    actions?: ActionTree<any, any>;
    modules?: Record<string, HotUpdatableStoreProperties>;
};
/**
 * Overrides a store instance's individual properties
 * In contrast to real hotUpdate() this can replace parts of modules
 * cf. https://vuex.vuejs.org/guide/hot-reload.html
 */
export default function hotUpdateDeep<T extends Store<any>>(store: T, overrides: HotUpdatableStoreProperties): T;
export {};
