let ol
export function runBenchmark (name, test) {
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

function init (name) {
  const heading = document.createElement('h2')
  const ol = document.createElement('ol')

  heading.innerHTML = name
  document.body.appendChild(heading)

  document.body.appendChild(ol)
  return ol
}

function runTests (tests, view, iterations) {
  for (let label in tests) {
    if (!tests.hasOwnProperty(label) || !typeof tests.label === 'function') {
      continue
    }

    ;(function (name, test) {
      setTimeout(function () {
        const start = new Date().getTime()
        let l = iterations
        if (!test.length) {
          while (l--) {
            test()
          }
        } else {
          test(1)
        }

        const total = new Date().getTime() - start
        const li = document.createElement('li')
        li.innerHTML = `${name}: total ms (total) ${total /
          iterations} ms (avg)`
        view.appendChild(li)
      }, 15)
    })(label, tests[label])
  }
}

export function benchmark (name, tests, iterations = 1000) {
  const view = init(name)
  runTests(tests, view, iterations)
}
