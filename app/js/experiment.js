import { assignStyle, directDescendants, byAttr, lastChild, firstChild } from './utils.js'

const experiments = [...document.querySelectorAll('.🤓')]

// .🤓
experiments
  .forEach(assignStyle({
    fontFamily: 'sans-serif',
    backgroundColor: 'hsl(200  100% 90%)',
    color: 'hsl(200 82% 15%)',
    borderRadius: '1rem',
    padding: '.5rem 1rem',
    boxShadow: '0 2rem 1.5rem -1rem hsla(0, 0%, 0%, 15%)',
  }))

// .🤓 > h2
experiments
  .flatMap(directDescendants)
  .filter(byAttr('nodeName', 'h2'))
  .forEach(assignStyle({
    textDecoration: 'underline',
    textDecorationColor: 'hsl(200 82% 45%)',
  }))

// .🤓 > p:not(:first-of-type):not(:last-of-type)
experiments
  .flatMap(directDescendants)
  .filter(byAttr('nodeName', 'p'))
  .map(node => {
    const {0:first, length:l, [l - 1]:last} = 
      [...node.parentElement.children]
      .filter(byAttr('nodeName', 'p'))
    
    return {node, first, last}
  })
  .filter(({node, first, last}) =>
    node !== first && node !== last)
  .map(({node}) => node)
  .forEach(assignStyle({
    textDecoration: 'underline',
    textDecorationColor: 'hsl(200 82% 45%)',
  }))

// .🤓 > p:last-child
experiments
  .flatMap(directDescendants)
  .filter(byAttr('nodeName', 'p'))
  .filter(lastChild)
  .forEach(assignStyle({
    textTransform: 'uppercase',
  }))