const _defaultsDeep = require('lodash/defaultsDeep')
const DEFAULT_CONFIG = require('./default')

/**
 * Combine the provided & default configurations as-needed.
 *
 * @param {Sermit~Config} [userConfig={}] - provided configuration
 * @returns {Sermit~Config} config
 */
const getConfig = (userConfig = {}) => (
  _defaultsDeep(userConfig, DEFAULT_CONFIG)
)

module.exports = getConfig
