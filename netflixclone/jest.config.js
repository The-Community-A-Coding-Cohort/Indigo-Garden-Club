module.exports = {
    // testEnvironment: "node",
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\.[tj]sx?$': 'babel-jest',
        // '^.+\\.(ts|tsx)$': 'ts-jest', 
        // '^.+\\.(js|jsx)$': 'babel-jest', 
        // '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': 'babel-jest', 
    },
    transformIgnorePatterns: [
        'node_modules/(?!(your-module-name|another-module)/)', // If you're using Next.js or certain packages
    ],
    testMatch: [
    //   "<rootDir>/src/**/*.test.tsx"  
        "<rootDir>/__tests__/**/*.test.tsx",  // Matches any test files in the netflixclone folder ending in ".test.tsx"
        "<rootDir>/__tests__/**/*.test.jsx"  // Matches any test files in the netflixclone folder ending in ".test.jsx"
        // "<rootDir>/**/**/*.test.tsx"
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  };