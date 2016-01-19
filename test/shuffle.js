/* globals describe it */
var assert = require('assert')
var isEqual = require('lodash.isequal')
var shuffleAndSplit = require('..')

var fixture = 'abcdefghij1234567890xyz'.split('')

describe('shuffle', function () {
  it('randomly orders the elements', function () {
    assert(!isEqual(
      shuffleAndSplit(fixture, 4),
      shuffleAndSplit(fixture, 4)
    ))
  })
})
