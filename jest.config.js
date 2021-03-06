module.exports = {
    testPathIgnorePatterns: ['/node_modules/'],
    setupFilesAfterEnv: [
        "<rootDir>/src/tests/setupTests.ts",
        "@testing-library/jest-dom/extend-expect" 
    ],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
    },
    testEnvironment: 'jsdom'
}