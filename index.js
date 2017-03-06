'use strict'

module.exports = function roadblock (shouldBlock, block, main) {
  shouldBlock ? block(main) : main()
}
