module.exports = {
	moduleFileExtensions: [
		'js',
		'json',
		'jsx',
		'ts',
		'tsx',
	],
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
	},
	testMatch: [
		'**/tests/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)',
	],
	preset: 'ts-jest',
	clearMocks: true,
};
