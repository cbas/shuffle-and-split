/* globals describe it */
var assert = require('assert')
var shuffleAndSplit = require('..')

var fixture = 'abcdefghij'.split('')

describe('split', function () {
  it('divides into multiple arrays', function () {
    for (var segments = 1; segments < fixture.length; segments = segments + 1) {
      var result = shuffleAndSplit(fixture, segments)
      assert(result.length === segments)
    }
  })
})
