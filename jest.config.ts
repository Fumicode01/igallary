// module.exports = {
//     setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
//     testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
//     moduleNameMapper: {
//       '\\.(scss|sass|css)$': 'identity-obj-proxy',
//        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/assetsTransformer.js", "\\.(css|less)$": "<rootDir>/assetsTransformer.js" 
//     },
//   };
//   export {}

module.exports = {
    roots: ['<rootDir>'],
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'svg'],
    moduleNameMapper: {
      '\\.svg': '<rootDir>/test/utils/svgr.js',
      '^@components/(.*)$': '<rootDir>/components/$1',
      '^@context/(.*)$': '<rootDir>/context/$1',
      '^@layouts/(.*)$': '<rootDir>/layouts/$1',
      '^@pages/(.*)$': '<rootDir>/pages/$1',
      '^@public/(.*)$': '<rootDir>/public/$1',
      '^@styles/(.*)$': '<rootDir>/styles/$1',
      '^@providers/(.*)$': '<rootDir>/providers/$1',
      '^@utils/(.*)$': '<rootDir>/utils/$1',
      '^@api/(.*)$': '<rootDir>/api/$1',
      '\\.(scss|css)$': 'identity-obj-proxy'
    },
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest'
    }
  };

  export {}