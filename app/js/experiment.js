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