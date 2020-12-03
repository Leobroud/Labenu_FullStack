import { Heading, Text, Box, Link } from "@chakra-ui/react"


const VARIANT_COLOR = 'teal'

export const LoginHeader = () => {
  return (
    <Box textAlign='center'>
      <Heading>Sign In to Your Account</Heading>
      <Text>
        Or <Link color={`${VARIANT_COLOR}.500`}>Create your account</Link>
      </Text>
    </Box>
  )
}