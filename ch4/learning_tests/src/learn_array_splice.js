/* eslint-disable */

TestCase('ArrayTest', {
  'test array splice should modify array': function() {
    const arr = [1, 2, 3, 4, 5]
    const result = arr.splice(2, 3)

    assertEquals([1, 2], arr)
  },

  'test array splice should return removed items in array': function() {
    const arr = [1, 2, 3, 4, 5]
    const result = arr.splice(2, 3)
    assertEquals([3, 4, 5], result)
  }
})
