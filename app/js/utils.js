export const styleNode = style => node => 
  Object.assign(node.style, style)

export const directDescendants = node =>
  [...node.children]

export const byNodeName = type => node =>
  node.nodeName === type.toUpperCase()

export const lastChild = node => 
  !node.nextElementSibling

export const walkDomTree = (node, cb) => {
  cb(node)
  node = node.firstChild
  
  while (node) {
    walkDomTree(node, cb)
    node = node.nextSibling
  }
}