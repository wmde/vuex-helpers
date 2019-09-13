import { action, mutation, getter } from '@/namespacedStoreMethods';

describe( 'namespacedStoreMethods', () => {

	it( 'action', () => {
		expect( action( 'foo', 'bar' ) ).toBe( 'foo/bar' );
		expect( action( 'foo', 'bar', 'baz' ) ).toBe( 'foo/bar/baz' );
	} );

	it( 'mutation', () => {
		expect( mutation( 'omg', 'wtf' ) ).toBe( 'omg/wtf' );
		expect( mutation( 'omg', 'wtf', 'bbq' ) ).toBe( 'omg/wtf/bbq' );
	} );

	it( 'getter', () => {
		expect( getter( 'lorem', 'ipsum' ) ).toBe( 'lorem/ipsum' );
		expect( getter( 'lorem', 'ipsum', 'dolor' ) ).toBe( 'lorem/ipsum/dolor' );
	} );

} );
