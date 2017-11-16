export default function assert (message, expr) {
  if (!expr) {
    throw new Error(message)
  }
  assert.count += 1
  return true
}
