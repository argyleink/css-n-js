export const assignStyle = style => node =>
  Object.assign(node.style, style)

export const directDescendants = node =>
  [...node.children]

export const totalDescendants = (total, child) => 
  child.children.length
    ? [...child.children]
        .reduce(totalDescendants, [...total, ...child.children])
    : total

export const byAttr = (attr, val) => node =>
  node[attr] === val.toUpperCase()

export const lastChild = node =>
  !node.nextElementSibling

export const firstChild = node =>
  !node.prevElementSibling
