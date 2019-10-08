import newMockStore from '@/newMockStore';

describe( 'newMockStore', () => {
	it( 'creates new mock store with default', () => {
		const mockStore = newMockStore( {} );
		expect( mockStore ).toBeDefined();
		expect( mockStore.commit ).toBeDefined();
		expect( mockStore.dispatch ).toBeDefined();
		expect( mockStore.state ).toBeDefined();
		expect( mockStore.getters ).toBeDefined();
		expect( mockStore.rootState ).toBeDefined();
		expect( mockStore.rootGetters ).toBeDefined();
	} );

	it( 'creates new mock store with custom parameters', () => {
		const commit = jest.fn();
		const dispatch = jest.fn();
		const state = jest.fn();
		const getters = jest.fn();
		const rootState = jest.fn();
		const rootGetters = jest.fn();

		const storeObject = {
			commit,
			dispatch,
			state,
			getters,
			rootState,
			rootGetters,
		};
		const mockStore = newMockStore( storeObject );

		expect( mockStore.commit ).toBe( storeObject.commit );
		expect( mockStore.dispatch ).toBe( storeObject.dispatch );
		expect( mockStore.state ).toBe( storeObject.state );
		expect( mockStore.getters ).toBe( storeObject.getters );
		expect( mockStore.rootState ).toBe( storeObject.rootState );
		expect( mockStore.rootGetters ).toBe( storeObject.rootGetters );
	} );
} );
