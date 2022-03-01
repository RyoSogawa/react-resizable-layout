/** @type {import('@swc/core').Config} */
const swcConfig = {
  // ソースマップの出力を有効にする
  sourceMaps: true,
  module: {
    // JestがCommonJSでモジュールを読み込むのでCommonJS形式で出力する
    type: 'commonjs',
  },
  jsc: {
    parser: {
      syntax: 'typescript',
    },
  },
}

/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest', swcConfig],
  },
  testMatch: ['./tests/**/*.test.ts'],
}
