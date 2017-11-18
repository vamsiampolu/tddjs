import testCase from '../ch1/testcase'
import assert from '../ch1/assert'
import trim from './trim'

const tests = {
  'test trim should remove leading whitespace': function () {
    const input = '    a string'
    const expected = 'a string'
    const actual = trim(input)
    assert('should remove trailing white-space', actual === expected)
  }
}

testCase('String trim', tests)
