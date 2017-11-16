import testCase from './testcase'
import strftime from './strftime'
import assert from './assert'

const tests = {
  setup: function setup () {
    this.date = new Date(2009, 9, 2)
  },
  'test format specifier %Y': function () {
    const format = '%Y'
    const expected = '2009'
    const actual = strftime(format, this.date)
    assert('%Y should return full year', actual === expected)
  },
  'test format specifier %d': function () {
    const format = '%d'
    const expected = '02'
    const actual = strftime(format, this.date)
    assert('%d should return the date', actual === expected)
  },
  'test format specifier %m': function () {
    const format = '%m'
    const expected = '10'
    const actual = strftime(format, this.date)
    assert('%m should return the month', actual === expected)
  },
  'test format specifier %y': function () {
    const format = '%y'
    const expected = '09'
    const actual = strftime(format, this.date)
    assert('%y should return year shorthand', actual === expected)
  }
}

testCase('strftime test', tests)
