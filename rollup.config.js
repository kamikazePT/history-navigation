/* eslint-disable import/no-dynamic-require */
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import path from 'path';
import babel from 'rollup-plugin-babel';
import multiInput from 'rollup-plugin-multi-input';

const { LERNA_PACKAGE_NAME } = process.env;
const PACKAGE_ROOT_PATH = process.cwd();
const INPUT_FILES = ['src/**/index.js', 'src/**/index.jsx'].map(input => path.resolve(PACKAGE_ROOT_PATH, input));
const OUTPUT_DIR = path.resolve(PACKAGE_ROOT_PATH, 'dist');
const PKG_JSON = require(path.resolve(PACKAGE_ROOT_PATH, 'package.json'));
const IS_BROWSER_BUNDLE = !!PKG_JSON.browser;

const dependencies = PKG_JSON.dependencies || {};
const peerDependencies = PKG_JSON.peerDependencies || {};

const ALL_MODULES = [...Object.keys(dependencies), ...Object.keys(peerDependencies)];
const mirror = array => array.reduce((acc, val) => ({ ...acc, [val]: val }), {});

const formats = IS_BROWSER_BUNDLE ? ['umd'] : ['esm', 'cjs'];

export default formats.map(format => ({
  plugins: [
    babel({
      exclude: /node_modules/,
      rootMode: 'upward',
      ignore: [/.stories/, /__tests__/, /__snapshots__/],
      runtimeHelpers: true,
    }),
    commonjs({
      include: /node_modules/,
      namedExports: {
        react: ['Component', 'useState', 'useEffect'],
      },
    }),
    nodeResolve({ extensions: ['.js', '.jsx'] }),
    multiInput(),
  ],
  input: INPUT_FILES,
  external: IS_BROWSER_BUNDLE ? undefined : ALL_MODULES,
  output: {
    dir: path.join(OUTPUT_DIR, format),
    format,
    name: LERNA_PACKAGE_NAME,
    amd: {
      id: LERNA_PACKAGE_NAME,
    },
    sourcemap: true,
    globals: IS_BROWSER_BUNDLE ? mirror(ALL_MODULES) : undefined,
  },
}));
