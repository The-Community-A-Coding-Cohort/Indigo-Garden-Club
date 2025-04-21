module.exports = {
    // testEnvironment: "node",
    // preset: 'ts-jest',
    // preset: 'babel-jest',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
        // '^.+\\.(ts|tsx)$': 'ts-jest', 
        // '^.+\\.(js|jsx)$': 'babel-jest', 
        // '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': 'babel-jest', 
    },
    testMatch: [
        "<rootDir>/__tests__/**/*.test.tsx",  // Matches any test files in the netflixclone folder ending in ".test.tsx"
        "<rootDir>/__tests__/**/*.test.jsx"  // Matches any test files in the netflixclone folder ending in ".test.jsx"
    ],
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  };