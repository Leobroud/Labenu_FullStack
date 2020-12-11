import { Heading, Box, Text, Link } from "@chakra-ui/react";
import { SignupPage } from '../router/Pages';
import { useHistory } from 'react-router-dom';


const VARIANT_COLOR = 'teal'

export const LoginHeader = () => {
  return (
    <Box textAlign='center'>
      <Heading>Sign In to Your Account</Heading>
    </Box>
  )
}

export const LoginFooter = () => {
  
  const history = useHistory()

  return (
    <Box>
      <Text>
        Don't have an account? <Link color={`${VARIANT_COLOR}.500`} onClick={() => SignupPage(history)} >Sign up</Link>
      </Text>
    </Box>
  )
}