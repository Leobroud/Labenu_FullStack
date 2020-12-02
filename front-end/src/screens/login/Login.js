import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { Input, Stack, Container, Box } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"

const Login = () => {
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
    <>
      <Button size="sm" margin="10px">Criar Conta</Button>
      <Container maxW="xl" centerContent>
        <Box  padding="4"  maxW="3x1" marginTop='100px' borderWidth="1px" borderRadius="lg" overflow="hidden">
          <form onSubmit={handleSubmittion} autoComplete="off" >
            <Stack spacing={4} w="300px">
              <Input autoComplete="off" name="email" onChange={handleInputChange} type="email" placeholder="E-mail" size="md" />
              <Input name="password" onChange={handleInputChange} type="password" placeholder="Digite a Senha" size="md" />
              <Button type="submit" size="md" onClick={handleLogin}>Entrar</Button>
              <Button size="sm" variant="link">Crie uma conta</Button>
            </Stack>
          </form>
        </Box>
      </Container>  
    </>

  )
}

export default Login