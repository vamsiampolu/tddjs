export default function output (text, color) {
  var p = window.document.createElement('p')
  p.innerHTML = text
  p.style.color = color
  document.body.appendChild(p)
}
