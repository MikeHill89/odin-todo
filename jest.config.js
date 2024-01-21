module.exports = {
    testEnvironment: 'node',
    transform: {
        '^.+\\.m?js$': 'babel-jest',
    },
    moduleNameMapper: {
        '^src/(.*)$': '<rootDir>/src/$1',
    },
    testMatch: ['**/__tests__/**/*.test.mjs']
};
