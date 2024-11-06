// /**
//  * @type {import("jest").Config}
//  */
// module.exports = {
//   testEnvironment: "jsdom",
//   transform: {
//     '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
//     // "^.+\\ts(x)?$": ["ts-jest", {
//     //   isolatedModules: true
//     // }]
//   },
//   moduleFileExtensions: [
//     "tsx", "ts", "jsx", "js", "css"
//   ],
//   // testMatch: ["**/*.test.(js,ts,jsx,tsx)"],
//   moduleDirectories: ["node_modules"],
//   moduleNameMapper: {
//     '@/(.*)': "<rootDir>/src/$1"
//   }
//   // setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
// }

import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)
