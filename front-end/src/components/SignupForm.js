import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import useForm from '../hooks/useForm';
import { Input, Box, Stack, FormLabel} from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"

const VARIANT_COLOR = 'teal'



const SignupForm = () => {

  const history = useHistory()
  const { form, onChange, resetState } = useForm({
    name:"",
    nickname:"",
    email:"",
    password:"",

  })

  const handleInputChange = (event) =>{
    const { name, value } = event.target
    onChange(name, value)
  } 


  const handleSubmittion = (event) =>{
    event.preventDefault()
    handleSignUp()
    resetState()
  }

  const handleSignUp = () => {
    axios
      .post('http://localhost:3003/user/signup', form)
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
    <Stack>
        <FormLabel>Name</FormLabel>
        <Input 
        autoComplete="off" 
        name="name" 
        value={form.name} 
        onChange={handleInputChange} 
        type="text" 
        placeholder="Enter your name"
        />
      </Stack>
      <Stack mt={4}>
        <FormLabel>Nickname</FormLabel>
        <Input 
        name="nickname" 
        value={form.nickname} 
        onChange={handleInputChange} 
        type="text" 
        placeholder="Enter your nickname"
        />
      </Stack>
      <Stack mt={4}>
        <FormLabel>Email address</FormLabel>
        <Input 
        autoComplete="off" 
        value={form.email} 
        name="email" 
        onChange={handleInputChange} 
        type="email" 
        placeholder="Enter your email address"
        />
      </Stack>
      <Stack mt={4}>
        <FormLabel>Password</FormLabel>
        <Input 
        name="password" 
        value={form.password} 
        onChange={handleInputChange} 
        type="password" 
        placeholder="Enter your password"
        />
      </Stack>
        <Button 
        type="submit" 
        onClick={handleSignUp} 
        variantColor={VARIANT_COLOR}  
        width='full' 
        mt={4}>Create
        </Button>
    </form>
  </Box>
  )
}

export default SignupForm