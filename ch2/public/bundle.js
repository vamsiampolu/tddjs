;(function () {
  'use strict'

  function assert (message, expr) {
    if (!expr) {
      throw new Error(message)
    }
    assert.count += 1
    return true
  }

  function output (text, color) {
    var p = window.document.createElement('p')
    p.innerHTML = text
    p.style.color = color
    document.body.appendChild(p)
  }

  function testCase (name, tests) {
    assert.count = 0
    let successful = 0
    let testCount = 0

    const hasSetup = typeof tests.setup === 'function'
    const hasTeardown = typeof tests.tearDown === 'function'
    for (let test in tests) {
      if (!/^test/.test(test)) {
        continue
      }
      testCount++

      if (hasSetup) {
        tests.setup()
      }
      try {
        tests[test]()
        output(test, 'green')
        if (hasTeardown) {
          tests.tearDown()
        }
        successful += 1
      } catch (e) {
        output(`${test} failed ${e.message}`, 'red')
      }
    }
    const color = successful === testCount ? 'green' : 'red'
    output(
      `<strong>${testCount} tests ${testCount - successful} failure</strong>`,
      color
    )
  }

  function trim (str) {
    const temp = str.replace(/^\s+/, '')
    return temp.replace(/\s+$/, '')
  }

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
})()
