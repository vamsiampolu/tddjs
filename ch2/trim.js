export default function trim (str) {
  const temp = str.replace(/^\s+/, '')
  return temp.replace(/\s+$/, '')
}
