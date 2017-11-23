;(function () {
  'use strict'

  let ol
  function runBenchmark (name, test) {
    if (!ol) {
      ol = document.createElement('ol')
      document.body.appendChild(ol)
    }

    setTimeout(function () {
      const start = new Date().getTime()
      test()
      const total = new Date().getTime() - start
      const li = document.createElement('li')
      li.innerHTML = `${name}: ${total} ms`
      ol.appendChild(li)
    }, 15)
  }

  const loopLength = 500000

  let array = []

  for (let i = 0; i < loopLength; i++) {
    array[i] = 'item' + i
  }

  function forLoop$1 () {}

  function forLoopCachedLength$1 () {}

  function forLoopDirectAccess$1 () {}

  function whileLoop$1 () {}

  function whileLoopCachedLength$1 () {}

  function reversedWhileLoop$1 () {}

  function doubleReversedWhileLoop$1 () {}

  var tests = Object.freeze({
    forLoop: forLoop$1,
    forLoopCachedLength: forLoopCachedLength$1,
    forLoopDirectAccess: forLoopDirectAccess$1,
    whileLoop: whileLoop$1,
    whileLoopCachedLength: whileLoopCachedLength$1,
    reversedWhileLoop: reversedWhileLoop$1,
    doubleReversedWhileLoop: doubleReversedWhileLoop$1
  })

  const {
    forLoop,
    forLoopCachedLength,
    forLoopDirectAccess,
    whileLoop,
    whileLoopCachedLength,
    reversedWhileLoop,
    doubleReversedWhileLoop
  } = tests

  runBenchmark('for-loop', forLoop)
  runBenchmark('for-loop, cached length', forLoopCachedLength)
  runBenchmark('for-loop, direct array access', forLoopDirectAccess)
  runBenchmark('while-loop', whileLoop)
  runBenchmark('while-loop, cached length property', whileLoopCachedLength)
  runBenchmark('reversed while-loop', reversedWhileLoop)
  runBenchmark('double reversed while-loop', doubleReversedWhileLoop)
})()
