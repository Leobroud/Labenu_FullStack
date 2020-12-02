import React from 'react'
import Router from './router/Router'

import { ChakraProvider } from "@chakra-ui/react"

const App = () => {
  return (
    <ChakraProvider>
      <Router/>
    </ChakraProvider>
  );
}

export default App;