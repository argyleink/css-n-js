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