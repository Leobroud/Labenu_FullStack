import { Heading, Text, Box, Link } from "@chakra-ui/react"
import { useHistory } from 'react-router-dom';
import { SignupPage } from '../router/Pages'


const VARIANT_COLOR = 'teal'

export const LoginHeader = () => {
  const history = useHistory()

  return (
    <Box textAlign='center'>
      <Heading>Sign In to Your Account</Heading>
      <Text>
        Or <Link color={`${VARIANT_COLOR}.500`} onClick={() => SignupPage(history)} >Create your account</Link>
      </Text>
    </Box>
  )
}