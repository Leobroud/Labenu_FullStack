import {AllImage} from '../../components/Image'
import { IconButton, Box, useColorMode } from "@chakra-ui/react"
import { SunIcon, MoonIcon, ArrowLeftIcon } from '@chakra-ui/icons'
import { useHistory } from 'react-router-dom';
import {InsertImagePage} from '../../router/Pages'

const ViewImage = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const history = useHistory()
  return (
    <>
    <Box d='flex' justifyContent='space-between' p={4}>
      <IconButton
        icon={ <ArrowLeftIcon/> }
        onClick={() => InsertImagePage(history)}
        variant='ghost'
        size="lg"
      />
      <IconButton
      icon={colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
      onClick={toggleColorMode}
      variant='ghost'
      size="lg"
      /> 
    </Box>
      <AllImage/>
    </>
    
  )
}

export default ViewImage