const njk = require('../nunjucks')

/**
 * Recommended filename
 */
const TEMPLATE = 'layouts/file.njk'

/**
 * Single file renderer.
 *
 * @param {SermitBlankTemplate~Config} templateConfig - template config data.
 * @returns {Sermit~FileRenderer} renderer
 */
const renderPageFile = templateConfig => (params = {}) => (
  njk.render(TEMPLATE, { templateConfig, params })
)

module.exports = renderPageFile
