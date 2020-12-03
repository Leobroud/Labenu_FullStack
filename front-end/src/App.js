import React from 'react'
import Router from './router/Router'

import { ChakraProvider, ThemeProvider, theme, CSSReset  } from "@chakra-ui/react"


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ChakraProvider>
        <CSSReset />
        <Router/>
      </ChakraProvider>
    </ThemeProvider>
    
  );
}

export default App;
