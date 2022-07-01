import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import ts from 'rollup-plugin-ts'
import css from 'rollup-plugin-import-css'
import { terser } from 'rollup-plugin-terser'
import peerDepsExternal from  'rollup-plugin-peer-deps-external'

const packageJson = require('./package.json')

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      ts({
        tsconfig: './tsconfig.json',
        transpiler: 'babel',
        exclude: ['**/*.test.tsx', '**/*.stories.tsx', '**/*.css']
      }),
      css(),
      peerDepsExternal(),
      terser(),
    ],
  },
]