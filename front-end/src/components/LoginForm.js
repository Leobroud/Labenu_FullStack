import React, { useEffect} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import useForm from '../hooks/useForm';
import { Input, Stack, Box, FormLabel, Link, Checkbox, Button} from "@chakra-ui/react"



const VARIANT_COLOR = 'teal'

export const LoginForm = () => {
  const history = useHistory()

  useEffect(() => {
    const token = window.localStorage.getItem("token")

    if (token) {
      history.push('/view')
    }
  }, [history])

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
      .post('http://localhost:3003/user/login', form)
      .then(response => {
        localStorage.setItem("token", response.data.token)
        history.push("/view")
      }).catch(error => {
        console.log(error)
      })
  }

  return (
    <Box my={8} textAlign='left'>
      <form onSubmit={handleSubmittion}>
      <Stack >
        <FormLabel>Email address</FormLabel>
        <Input 
        autoComplete="off" 
        name="email" 
        value={form.email} 
        onChange={handleInputChange} 
        type="email"
        required
        placeholder="Enter your email address" 
        size="md"
        />
      </Stack>
      <Stack mt={4}>
        <FormLabel>Password</FormLabel>
        <Input 
        name="password" 
        value={form.password} 
        onChange={handleInputChange} 
        type="password"
        required
        placeholder="Enter your password" 
        size="md" 
        />
      </Stack>
      <Stack isInline justifyContent='space-between' mt={4}>
            <Box>
              <Checkbox>Remember Me</Checkbox>
            </Box>
            <Box>
              <Link color={`${VARIANT_COLOR}.500`}>Forgot password?</Link>
            </Box>
        </Stack>
        <Button 
        type="submit" 
        onClick={handleLogin} 
        variantColor={VARIANT_COLOR}  
        width='full' 
        mt={4}>LogIn
        </Button>
      </form>
    </Box>

  )
}