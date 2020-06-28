const path = require('path')
const Nunjucks = require('nunjucks')

/**
 * Nunjucks templates are in `res/templates` within the template root by
 * default.
 */
const INCLUDE_PATH = path.join(__dirname, '../../res/templates')

const nunjucks = Nunjucks.configure(INCLUDE_PATH, {})

module.exports = nunjucks
