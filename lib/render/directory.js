const njk = require('../nunjucks')

/**
 * Recommended filename
 */
const TEMPLATE = 'layouts/directory.njk'

/**
 * Directory listing renderer.
 *
 * @param {SermitBlankTemplate~Config} templateConfig - template config data.
 * @returns {Sermit~Renderer} renderer
 */
const renderPageDirectory = templateConfig => (params = {}) => (
  njk.render(TEMPLATE, { ...params, templateConfig })
)

module.exports = renderPageDirectory
