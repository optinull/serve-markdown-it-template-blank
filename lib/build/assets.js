const path = require('path')
const { renderAssets } = require('serve-markdown-it-lib')

/*
 * Resources live in the `res/` folder within the project root by default
 * (styles, assets, njk templates)
 */
const ASSETS_SRC_PATH = path.join(__dirname, '../../res/assets')

/**
 * Artifacts are stored in & resolved from the `public/` folder within the
 * project root by default.
 */
const ASSETS_BUILD_PATH = path.join(__dirname, '../../public')

/**
 * Static asset (files & folders) definition. Sources prefixed with `~` are
 * resolved with `requireDynamicModule`.
 *
 * {
 *   'dest/path': 'src/path'
 * }
 */
const ASSETS = {}

/**
 * @private
 */
const buildAssets = (options = {}) => renderAssets({
  quiet: false,
  dry: false,

  ...options,

  assets: ASSETS,
  srcPath: ASSETS_SRC_PATH,
  buildPath: ASSETS_BUILD_PATH
})

module.exports = buildAssets
