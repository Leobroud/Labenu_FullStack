import { Flex, Box } from "@chakra-ui/react"
import {ThemeSelector} from '../../components/ThemeSelector'
import {LoginHeader} from '../../components/LoginHeader'
import {LoginForm} from '../../components/LoginForm'


const Login = () => {
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
          <LoginHeader/>
          <LoginForm />
        </Box>
      </Box>
    </Flex>
  )
}

export default Login