const path = require('path')
const { renderStyles } = require('serve-markdown-it-lib')

/*
 * Styles live in the `res/styles` folder within the project root by default.
 */
const STYLES_SRC_PATH = path.join(__dirname, '../../res/styles/')

/**
 * Artifacts are stored in & resolved from the `public/` folder within the
 * project root by default.
 */
const STYLES_BUILD_PATH = path.join(__dirname, '../../public/')

/**
 * SCSS style definition, { dest: src }
 */
const STYLES = { 'index.css': 'index.scss' }

/**
 * @private
 */
const buildStyles = (options = {}) => renderStyles({
  quiet: false,
  dry: false,

  ...options,

  styles: STYLES,
  srcPath: STYLES_SRC_PATH,
  buildPath: STYLES_BUILD_PATH
})

module.exports = buildStyles
