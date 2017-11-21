TestCase('strftimeTest', {
  setUp: function () {
    this.date = new Date(2009, 9, 2, 22, 14, 45)
  },

  tearDown: function () {
    delete this.date
  },

  'test %Y returns full year': function () {
    const expected = '2009'
    const actual = formats.Y(this.date)
    assertString(actual)
    assertEquals(expected, actual)
  }
})
