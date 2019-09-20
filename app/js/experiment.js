import { 
  assignStyle, directDescendants, byAttr, 
  lastChild, firstChild, walkDomTree 
} from './utils.js'


const experiments = [...document.querySelectorAll('.🤓')]

// .🤓
experiments
  .forEach(assignStyle({
    fontFamily: 'sans-serif',
    fontSize: '2rem',
    backgroundColor: 'hsl(200 100% 90%)',
    color: 'hsl(200 82% 15%)',
    borderRadius: '1rem',
    padding: '1.5rem',
    boxShadow: '0 2rem 1.5rem -1rem hsla(0 0% 0% / 15%)',
  }))

// .🤓 > h2
experiments
  .flatMap(directDescendants)
  .filter(byAttr('nodeName', 'h2'))
  .forEach(assignStyle({
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
  .forEach(assignStyle({
    paddingLeft: '1rem',
    fontSize: '.75em',
  }))
