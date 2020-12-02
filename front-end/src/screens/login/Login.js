import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory()

  const {form, onChange, resetState}  = useForm({
    nickname:"",
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
    <div>Login</div>
  )
}

export default Login