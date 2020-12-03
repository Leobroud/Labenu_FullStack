import { IconButton, Box, useColorMode } from "@chakra-ui/react"
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

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