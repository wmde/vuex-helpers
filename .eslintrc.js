module.exports = {
	extends: [
		'wikimedia',
		'wikimedia/node',
		'wikimedia/language/rules-es2017',
		'@wmde/wikimedia-typescript',
	],
	plugins: [
		'filenames',
	],
	root: true,
	rules: {
		// We need a shared TS eslint config; copy from data-bridge

		'function-paren-newline': [ 'error', 'consistent' ],
		'filenames/match-exported': 'error',
		'object-shorthand': [ 'error', 'always' ],

		// diverging from Wikimedia rule set
		'max-len': [ 'error', 120 ],
		'comma-dangle': [ 'error', {
			arrays: 'always-multiline',
			objects: 'always-multiline',
			imports: 'always-multiline',
			exports: 'always-multiline',
			functions: 'always-multiline',
		} ],
		'operator-linebreak': 'off',
		'quote-props': 'off',
		'valid-jsdoc': 'off',

		// replacing from Wikimedia rule set
		'semi': 'off',
		'@typescript-eslint/semi': [ 'error', 'always' ],

		/* copied from eslint-config-wikimedia/client.json;
		 * TODO extend (part of) client.json again
		 * once it doesn’t pull in es5.json
		 */
		'no-alert': 'error',
		'no-console': 'error',
		'no-implied-eval': 'error',
	},
	overrides: [ {
		files: [ '**/*.ts' ],
		parser: '@typescript-eslint/parser',
		rules: {
			'no-undef': 'off',
		},
	} ],
};
