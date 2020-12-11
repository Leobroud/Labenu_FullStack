import { IconButton, Box, useColorMode } from "@chakra-ui/react"
import { SunIcon, MoonIcon, ArrowLeftIcon } from '@chakra-ui/icons'
import { useHistory } from 'react-router-dom';
import { LoginPage } from '../router/Pages'


export const ThemeSelector = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box textAlign='right' py={4}>
    <IconButton
      icon={colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
      onClick={toggleColorMode}
      variant='ghost'
    />
  </Box>
  )
}

export const GroupButton = () => {
  
  const { colorMode, toggleColorMode } = useColorMode()
  const history = useHistory()
  return(
    
    <Box d='flex' justifyContent='space-between' py={4}>
      <IconButton
        icon={ <ArrowLeftIcon/> }
        onClick={() => LoginPage(history)}
        variant='ghost'
      />
      <IconButton
      icon={colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
      onClick={toggleColorMode}
      variant='ghost'
      />      
    </Box>
  )
}