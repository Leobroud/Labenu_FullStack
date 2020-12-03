import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import useForm from '../hooks/useForm';
import { Input, Stack, Box, FormControl, FormLabel, Link, Checkbox} from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"


const VARIANT_COLOR = 'teal'


export const LoginForm = () => {
  const history = useHistory()

  const {form, onChange, resetState}  = useForm({
    email:"",
    password:""
  })

  const handleInputChange = (event) =>{
    const { name, value } = event.target
    onChange(name, value)
  }
  
  const handleSubmittion = (event) =>{
    event.preventDefault()
    handleLogin()
    resetState()
  }

  const handleLogin = () => {
    axios
      .post("Colocar a URL", form)
      .then(response => {
        history.push("/view")
      }).catch(error => {
        console.log(error)
      })
  }

  return (
    <Box my={8} textAlign='left'>
      <form onSubmit={handleSubmittion}>
      <FormControl >
        <FormLabel>Email address</FormLabel>
        <Input autoComplete="off" name="email" onChange={handleInputChange} type="email" placeholder="Enter your email address" size="md" />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Password</FormLabel>
        <Input name="password" onChange={handleInputChange} type="password" placeholder="Enter your password" size="md" />
      </FormControl>
      <Stack isInline justifyContent='space-between' mt={4}>
            <Box>
              <Checkbox>Remember Me</Checkbox>
            </Box>
            <Box>
              <Link color={`${VARIANT_COLOR}.500`}>Forgot your password?</Link>
            </Box>
        </Stack>
        <Button type="submit" onClick={handleLogin} variantColor={VARIANT_COLOR}  width='full' mt={4}>Log In</Button>
      </form>
    </Box>

  )
}

/* <Container maxW="xl" centerContent bgImage="(../image/fundo)" >
<Box h="300px"   padding="4"  maxW="3x1" marginTop='100px' overflow="hidden"  boxShadow="lg">
  <form onSubmit={handleSubmittion} autoComplete="off" >
    <Stack spacing={4} w="300px" >
      <Input name="password" onChange={handleInputChange} type="password" placeholder="Digite a Senha" size="md" />
      <Button type="submit" size="md" onClick={handleLogin}>Entrar</Button>
      <Button size="sm" variant="link">Crie uma conta</Button>
    </Stack>
  </form>
</Box>
</Container> */
