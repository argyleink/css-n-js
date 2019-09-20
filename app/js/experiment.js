import { 
  styleNode, directDescendants, 
  byNodeName, lastChild, walkDomTree
} from './utils.js'

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
  .filter(byAttr('nodeName', 'h2'))
  .forEach(styleNode({
    color: 'hsl(200 82% 15%)',
    margin: 0,
  }))

// div div div div...
experiments
  .reduce((children, experiment) => {
    [...experiment.children].forEach(child => 
      walkDomTree(child, node =>
        children.push(node)))
    
    return children
  }, [])
  .filter(byAttr('nodeName', 'div'))
  .forEach(({style}) => 
    Object.assign(style, {
      paddingLeft: '1rem',
      fontSize: '.75em',
    }))