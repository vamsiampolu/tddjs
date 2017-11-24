import { runBenchmark, benchmark } from './lib/index'
import * as tests from './loops'

const {
  forLoop,
  forLoopCachedLength,
  forLoopDirectAccess,
  whileLoop,
  whileLoopCachedLength,
  reversedWhileLoop,
  doubleReversedWhileLoop
} = tests

benchmark('loops micro benchmark', [
  forLoop,
  forLoopCachedLength,
  forLoopDirectAccess,
  whileLoop,
  whileLoopCachedLength,
  reversedWhileLoop,
  doubleReversedWhileLoop
])

runBenchmark('for-loop', forLoop)
runBenchmark('for-loop, cached length', forLoopCachedLength)
runBenchmark('for-loop, direct array access', forLoopDirectAccess)
runBenchmark('while-loop', whileLoop)
runBenchmark('while-loop, cached length property', whileLoopCachedLength)
runBenchmark('reversed while-loop', reversedWhileLoop)
runBenchmark('double reversed while-loop', doubleReversedWhileLoop)
