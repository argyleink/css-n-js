import { styleNode, directDescendants, byNodeName, lastChild } from './utils.js'

const experiments = [...document.querySelectorAll('.🤓')]

experiments.forEach(styleNode({
  fontFamily:       'sans-serif',
  backgroundColor:  'hsl(200  100% 90%)',
  color:            'hsl(200 82% 15%)',
  borderRadius:     '1rem',
  padding:          '.5rem 1rem',
  boxShadow:        '0 2rem 1.5rem -1rem hsla(0, 0%, 0%, 15%)',
}))

experiments
  .flatMap(directDescendants)
  .filter(byNodeName('h2'))
  .forEach(styleNode({
    color: 'hsl(200 82% 15%)'
  }))

experiments
  .flatMap(directDescendants)
  .filter(byNodeName('p'))
  .filter(lastChild)
  .forEach(styleNode({
    color: 'hsl(200 82% 15%)'
  }))

const walkDomTree = (node, cb) => {
  cb(node)
  node = node.firstChild
  
  while (node) {
    walkDomTree(node, cb)
    node = node.nextSibling
  }
}

// div div div div...
experiments
  .reduce((children, experiment) => {
    [...experiment.children].forEach(child => 
      walkDomTree(child, node =>
        children.push(node)))
    
    return children
  }, [])
  .filter(child => child.nodeName === 'DIV')
  .forEach(({style}) => 
    Object.assign(style, {
      paddingLeft: '1rem',
    }))