module.exports = {
  displayName: 'vue3',
  globals: {
    'vue-jest': {
      tsConfig: './vue3/tsconfig.spec.json',
    },
  },
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons'],
  },
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'vue'],
  testTimeout: 10000,
};
