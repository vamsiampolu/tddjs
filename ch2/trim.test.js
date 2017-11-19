import testCase from '../ch1/testcase'
import assert from '../ch1/assert'
import trim from './trim'

const tests = {
  'test trim should remove leading whitespace': function () {
    const input = '    a string'
    const expected = 'a string'
    const actual = trim(input)
    assert('should remove trailing white-space', actual === expected)
  },
  'test trim should remove trailing whitespace': function () {
    const input = 'a string '
    const expected = 'a string'

    const actual = trim(input)
    assert('should remove trailing whitespace', actual === expected)
  },

  'test trim should remove both leading and trailing whitespaces': function () {
    const input = '   a string    '
    const expected = 'a string'

    const actual = trim(input)
    console.log(actual.length)

    assert(
      'should remove both trailing and leading whitespace',
      actual === expected
    )
  },

  'test trim does not change string containing no trailing or leading whitespaces': function () {
    const input = 'a string'
    const expected = 'a string'

    const actual = trim(input)
    assert(
      'should not remove any spaces if no leading/trailing spaces',
      actual === expected
    )
  }
}

testCase('String trim', tests)
