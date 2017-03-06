'use strict'

const assert = require('assert')
const roadblock = require('.')

describe('roadblock()', function () {
  it('should call blocking function if condition is true', function (done) {
    let called = false
    roadblock(true, next => {
      called = true
      next()
    }, () => {
      assert(called)
      done()
    })
  })

  it('should bypass blocking function if condition is false', function (done) {
    let called = false
    roadblock(false, next => {
      called = true
      next()
    }, () => {
      assert(!called)
      done()
    })
  })
})
