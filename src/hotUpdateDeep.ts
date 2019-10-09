/* eslint-disable no-underscore-dangle, @typescript-eslint/no-explicit-any */
import { ActionTree, GetterTree, MutationTree, StoreOptions, Store, Module } from 'vuex';

type HotUpdatableStoreProperties = {
	getters?: GetterTree<any, any>;
	mutations?: MutationTree<any>;
	actions?: ActionTree<any, any>;

	modules?: Record<string, HotUpdatableStoreProperties>;
};

function getModuleOverrides(
	defaults: StoreOptions<any>,
	overrides: HotUpdatableStoreProperties = {},
): Module<any, any> {
	return {
		namespaced: true,
		state: defaults.state,
		getters: Object.assign( {}, defaults.getters, overrides.getters ),
		mutations: Object.assign( {}, defaults.mutations, overrides.mutations ),
		actions: Object.assign( {}, defaults.actions, overrides.actions ),
	};
}

function assertOverride( defaultValue: any, override: any, message: string ): void {
	const defaultKeys = Object.keys( defaultValue );

	if (
		override &&
		Object.keys( override ).every( ( m ) => { return defaultKeys.indexOf( m ) !== -1; } ) === false
	) {
		throw new Error( `${message} Valid options: ${defaultKeys.join( ', ' )}` );
	}
}

/**
 * Overrides a store instance's individual properties
 * In contrast to real hotUpdate() this can replace parts of modules
 * cf. https://vuex.vuejs.org/guide/hot-reload.html
 */
export default function hotUpdateDeep<T extends Store<any>>( store: T, overrides: HotUpdatableStoreProperties ): T {
	const storeModules = ( store as any )._modules.root._children;

	assertOverride(
		storeModules,
		overrides.modules,
		'You are trying to override parts of a module that does not exist.',
	);

	const storeOptions: StoreOptions<any> = {
		...getModuleOverrides( ( store as any )._modules.root._rawModule, overrides ),
		modules: {},
	};

	Object.entries( storeModules ).forEach( ( [ moduleName, module ] ) => {
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		storeOptions.modules![ moduleName ] = getModuleOverrides(
			( module as any )._rawModule,
			overrides.modules ? overrides.modules[ moduleName ] : undefined,
		);
	} );

	store.hotUpdate( storeOptions );

	return store;
}
