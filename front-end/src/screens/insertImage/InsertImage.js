import { ImageForm } from "../../components/ImageForm"
import { Flex, Box, Heading } from "@chakra-ui/react"
import {ThemeSelector} from '../../components/ThemeSelector'



const InsertImage = () => {
  return (
    <Flex minHeight='100vh' width='full' align='center' justifyContent='center'>
      <Box 
        borderWidth={1}
        px={4}
        width='full'
        maxWidth='500px'
        borderRadius={4}
        textAlign='center'
        boxShadow='lg'
      >
        <ThemeSelector />
        <Box p={4}>
        <Heading>Create Your Image</Heading>
          <ImageForm/>
        </Box>
      </Box>
    </Flex>
  )
}

export default InsertImage