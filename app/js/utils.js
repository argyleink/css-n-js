export const assignStyle = styles => node =>
  Object.assign(node.style, styles)

export const directDescendants = node =>
  [...node.children]

export const byAttr = (attr, val) => node =>
  node[attr] === val.toUpperCase()

export const lastChild = node =>
  !node.nextElementSibling

export const firstChild = node =>
  !node.prevElementSibling