import assert from './assert'
import output from './output'

export default function testCase (name, tests) {
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
