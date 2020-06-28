const path = require('path')
const _merge = require('lodash/merge')
const genRawSrcMarkdown = require('./markdown/gen_raw_src')
const genImageMarkdown = require('./markdown/gen_image')
const renderPageDirectory = require('./render/directory')
const renderPageFile = require('./render/file')
const buildStyles = require('./build/styles')
const buildAssets = require('./build/assets')
const getConfig = require('./config')

/**
 * Unique name to identify template; should form the package name when prefixed
 * with `serve-markdown-it-template-`.
 */
const NAME = 'blank'

/**
 * Absolute path to rendered resources folder, ready for serving.
 */
const PUBLIC_PATH = path.join(__dirname, '../public/')

const TEMPLATE_DATA = {
  name: NAME,
  publicPath: PUBLIC_PATH,
  genRawSrcMarkdown,
  genImageMarkdown,
  buildAssets,
  buildStyles,
  getConfig
}

/**
 * @private
 */
const template = (userConfig = {}) => {
  const config = getConfig(userConfig)

  return {
    renderPageDirectory: renderPageDirectory(config),
    renderPageFile: renderPageFile(config),
    config,

    ...TEMPLATE_DATA
  }
}

_merge(template, TEMPLATE_DATA)

module.exports = template
