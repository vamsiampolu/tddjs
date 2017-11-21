/* eslint-disable */
window
  .YUI({
    combine: true,
    timeout: 10000
  })
  .use('node', 'console', 'test', function(Y) {
    const { Assert: assert } = Y
    const strftimeTestCase = new Y.Test.Case({
      name: 'strftime test case',

      setUp: function() {
        this.date = new Date(2009, 9, 2, 22, 14, 45)
      },

      tearDown: function() {
        delete this.date
      },

      'format %Y returns full year': function() {
        const expected = '2009'
        const actual = formats.Y(this.date)
        assert.isString(actual)
        assert.areEqual(expected, actual)
      },

      'test %m returns month': function() {
        const expected = '10'
        const actual = formats.m(this.date)
        assert.isString(actual)
        assert.areEqual(expected, actual)
      },

      'test %d returns date': function() {
        const expected = '02'
        const actual = formats.d(this.date)
        assert.isString(actual)
        assert.areEqual(expected, actual)
      },

      'test %y returns last 2 digits': function() {
        const expected = '09'
        const actual = formats.y(this.date)
        assert.isString(actual)
        assert.areEqual(expected, actual)
      },

      'test %F acts as %Y-%m-%d': function() {
        const expected = '2009-10-02'
        const actual = strftime('%F', this.date)
        assert.isString(actual)
        assert.areEqual(expected, actual)
      }
    })

    const r = new Y.Console({
      newestOnTop: false,
      style: 'block'
    })

    r.render('#testReport')
    Y.Test.Runner.add(strftimeTestCase)
    Y.Test.Runner.run()
  })
