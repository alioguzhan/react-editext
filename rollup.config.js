import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import sourceMaps from 'rollup-plugin-sourcemaps';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';
import del from 'rollup-plugin-delete';
import pkg from './package.json';

export default {
  input: `src/index.tsx`,
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
      plugins: [terser()],
      exports: 'auto',
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
      plugins: [terser()],
      exports: 'auto',
    },
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
      exports: 'auto',
    },
  ],
  watch: {
    include: 'src/**',
  },
  plugins: [
    external(),
    postcss({
      modules: true,
    }),
    // Allow json resolution
    json(),
    // Compile TypeScript files
    typescript({
      useTsconfigDeclarationDir: true,
      rollupCommonJSResolveHack: true,
      exclude: ['**/__tests__/**', '*.spec.*', '*.test.*'],
      clean: true,
    }),
    // Allow node_modules resolution, so you can use 'external' to control
    // which external modules to include in the bundle
    // https://github.com/rollup/rollup-plugin-node-resolve#usage
    resolve(),
    // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
    commonjs(),
    // Resolve source maps to the original source
    sourceMaps(),
    del({
      targets: 'dist/*',
      hook: 'buildStart',
    }),
    del({
      targets: ['dist/utils.d.ts', 'dist/utils.d.ts.map'],
      hook: 'generateBundle',
    }),
  ],
};
