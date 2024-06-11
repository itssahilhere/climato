import React from 'react'

const login = () => {
  return (
    <Box
      component="form"
      noValidate
      sx={{
        display: 'grid',
        gridTemplateColumns: { sm: '1fr 1fr' },
        gap: 2,
        color: 'black',
      }}
    >
      <CssTextField label="Custom CSS"  id="custom-css-outlined-input" />
      <ValidationTextField
        label="CSS validation style"
        required
        variant="outlined"
        defaultValue="Success"
        id="validation-outlined-input"
      />
    </Box>
  )
}

export default loginForm