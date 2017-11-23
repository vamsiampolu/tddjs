/* eslint-disable no-unused-vars */
const loopLength = 500000000

let array = []

for (let i = 0; i < loopLength; i++) {
  array[i] = 'item' + i
}

export function forLoop () {
  for (let i = 0, item; i < array.length; i++) {
    item = array[i]
  }
}

forLoop.label = 'for-loop'

export function forLoopCachedLength () {
  for (let i = 0, l = array.length, item; i < l; i++) {
    item = array[i]
  }
}

forLoopCachedLength.label = 'forLoopCachedLength'

export function forLoopDirectAccess () {
  for (let i = 0, item; (item = array[i]); i++) {}
}

forLoopDirectAccess.label = 'forLoopDirectAccess'

export function whileLoop () {
  let i = 0
  while (i < array.length) {
    const item = array[i]
    i++
  }
}

whileLoop.label = 'whileLoop'

export function whileLoopCachedLength () {
  let i = 0
  const l = array.length
  while (i < l) {
    const item = array[i]
    i++
  }
}

export function reversedWhileLoop () {
  let l = array.length
  while (l--) {
    const item = array[l]
  }
}

export function doubleReversedWhileLoop () {
  const l = array.length
  let i = l
  while (i--) {
    const item = array[l - i - 1]
  }
}

whileLoopCachedLength.label = 'whileLoopCachedLength'
