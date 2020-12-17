import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { Input, Box, FormLabel, FormControl } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"
import { useProtect } from '../hooks/useProtect'

const VARIANT_COLOR = 'teal'


export const ImageForm = () => {
  useProtect()
  const history = useHistory()

  const [ subtitle, setSubtitle] = useState("")
  const [ author, setAuthor] = useState("")
  const [ date, setDate] = useState("")
  const [ url, setUrl] = useState("")
  const [ tags, setTags] = useState("")
  const [ collection, setCollection] = useState("")

  const handleSubtitleChange = (event) => {
    setSubtitle(event.target.value)
  }

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value)
  }

  const handleDateChange = (event) => {
    setDate(event.target.value)
  }

  const handleFileChange = (event) => {
    
    const file = event.target.files[0]

    const reader = new FileReader()

    reader.readAsDataURL(file)

    reader.onload = () => {
      setUrl(reader.result)
    }
  } 

  const handleTagsChange = (event) => {
    setTags(event.target.value)
  }

  const handleCollectionChange = (event) => {
    setCollection(event.target.value)
  }


  const handleImageCreate = (event) => {
  
    const token = window.localStorage.getItem("token")
    
    const body = {
      subtitle: subtitle,
      author: author,
      date: date,
      file: url,
      tags: tags,
      collection: collection
    }
    axios
      .post(`http://localhost:3003/image/create`, body, {
        headers:{
          Authorization: token
        }
      })
      .then(response => {})
      .catch(error => {})
  }

  return (
    <Box my={8} textAlign='left'>
      <form >
      <FormControl>
        <FormLabel>Subtitle</FormLabel>
        <Input
        value={subtitle} 
        onChange={handleSubtitleChange} 
        type="text"
        required 
        placeholder="Enter your subtitle" 
        size="md" 
        />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Author</FormLabel>
        <Input
        value={author} 
        onChange={handleAuthorChange} 
        type="text"
        required
        placeholder="Enter your author" 
        size="md" 
        />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Date</FormLabel>
        <Input 
        value={date} 
        onChange={handleDateChange} 
        type="date"
        required
        placeholder="Enter your date" 
        size="md" 
        />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>File</FormLabel>
        <Input
        onChange={handleFileChange} 
        type="file"
        required 
        placeholder="Enter your file" 
        size="md" 
        />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Tags</FormLabel>
        <Input 
        value={tags} 
        onChange={handleTagsChange} 
        type="text"
        required 
        placeholder="Enter your tag" 
        size="md" 
        />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Collection</FormLabel>
        <Input
        value={collection} 
        onChange={handleCollectionChange} 
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