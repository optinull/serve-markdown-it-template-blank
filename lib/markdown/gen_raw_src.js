const { promises: fs } = require('fs')
const path = require('path')

/**
 * Generate a markdown string to render raw file contents.
 *
 * @param {object} params - params
 * @param {string} params.srcPath - path to file, resolvable locally via `fs`
 * @returns {string} md
 */
const genRawSrcMarkdown = async ({ srcPath }) => {
  const ext = path.extname(srcPath)
  const src = await fs.readFile(srcPath, 'utf-8')

  return {
    flags: 'single-code-fence',
    md: [
      `\`\`\`${ext.slice(1)}`,
      src.trim(),
      '```'
    ].join('\n')
  }
}

module.exports = genRawSrcMarkdown
