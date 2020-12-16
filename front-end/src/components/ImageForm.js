import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import useForm from '../hooks/useForm';
import { Input, Box, FormLabel, FormControl } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"
import { useProtect } from '../hooks/useProtect'

const VARIANT_COLOR = 'teal'


export const ImageForm = () => {
  useProtect()
  const history = useHistory()

  const {form, onChange}  = useForm({
    subtitle: "",
    author: "", 
    date: Date, 
    file: "", 
    tags: "", 
    collection: ""
  })

  const handleInputChange = (event) =>{
    const { name, value } = event.target
    onChange(name, value)
  }
  
  const handleImageCreate = () => {
    const token = window.localStorage.getItem("token")
    axios
      .post('http://localhost:3003/image/create', form, {
        headers:{
          Authorization: token
        }
      })
      .then(response => {})
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <Box my={8} textAlign='left'>
      <form>
      <FormControl>
        <FormLabel>Subtitle</FormLabel>
        <Input 
        autoComplete="off" 
        name="subtitle" 
        value={form.subtitle} 
        onChange={handleInputChange} 
        type="text"
        required 
        placeholder="Enter your subtitle" 
        size="md" 
        />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Author</FormLabel>
        <Input 
        name="author" 
        value={form.author} 
        onChange={handleInputChange} 
        type="text"
        required
        placeholder="Enter your author" 
        size="md" 
        />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Date</FormLabel>
        <Input 
        name="date" 
        value={form.date} 
        onChange={handleInputChange} 
        type="date"
        required
        placeholder="Enter your date" 
        size="md" 
        />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>File</FormLabel>
        <Input 
        name="file" 
        value={form.file} 
        onChange={handleInputChange} 
        type="file"
        required 
        placeholder="Enter your file" 
        size="md" 
        />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Tags</FormLabel>
        <Input 
        name="tags" 
        value={form.tags} 
        onChange={handleInputChange} 
        type="text"
        required 
        placeholder="Enter your tag" 
        size="md" 
        />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Collection</FormLabel>
        <Input 
        name="collection" 
        value={form.collection} 
        onChange={handleInputChange} 
        type="text"
        required 
        placeholder="Enter your collection" 
        size="md" 
        />
      </FormControl>
        <Button 
        type="submit" 
        onClick={handleImageCreate} 
        variantColor={VARIANT_COLOR}  
        width='full' 
        mt={4}>Create
        </Button>
        <Button 
        onClick={()=>history.push("/view")} 
        variantColor={VARIANT_COLOR}
        mt={4}>View your images
        </Button>
      </form>
    </Box>

  )
}