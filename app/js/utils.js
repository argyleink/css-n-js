export const styleNode = style => node => 
  Object.assign(node.style, style)

export const directDescendants = node =>
  [...node.children]

export const byNodeName = type => node =>
  node.nodeName === type.toUpperCase()

export const lastChild = node => 
  !node.nextElementSibling