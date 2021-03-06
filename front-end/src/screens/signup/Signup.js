import { Flex, Box, Heading } from "@chakra-ui/react"
import { GroupButton} from '../../components/ThemeSelector'
import SignupForm from '../../components/SignupForm'


const Signup = () => {
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
        <GroupButton/>
        <Box p={4}>
        <Heading>Let's Get Started!</Heading>
          <SignupForm />
        </Box>
      </Box>
    </Flex>
  )
}

export default Signup