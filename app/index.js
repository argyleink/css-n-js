const experiments = [...document.querySelectorAll('.🤓')]

experiments
  .forEach(({style}) => 
    Object.assign(style, {
      fontFamily: 'sans-serif',
      backgroundColor: 'hsl(200  100% 90%)',
      color: 'hsl(200 82% 15%)',
      borderRadius: '1rem',
      padding: '.5rem 1rem',
      boxShadow: '0 2rem 1.5rem -1rem hsla(0, 0%, 0%, 15%)',
    }))

experiments
  .flatMap(experiment => [...experiment.children])
  .filter(child => child.nodeName === 'P')
  .map(node => {
    const {0:first, length:l, [l - 1]:last} = 
      [...node.parentElement.children]
      .filter(child => child.nodeName === 'P')

    return {node, first, last}
  })
  .filter(({node, first, last}) => 
    node !== first && node !== last)
  .map(({node}) => node)
  .forEach(({style}) => 
    Object.assign(style, {
      textDecoration: 'underline',
      textDecorationColor: 'hsl(200 82% 45%)',
    }))

experiments
  .flatMap(experiment => [...experiment.children])
  .filter(child => child.nodeName === 'P')
  .filter(child => !child.nextElementSibling)
  .forEach(({style}) => 
    Object.assign(style, {
      textTransform: 'uppercase',
    }))
