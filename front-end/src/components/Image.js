import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Badge, Img, Grid } from "@chakra-ui/react"


export const AllImage = () => {

  const [ image, setImage ] = useState([])
  const getImage = async () => {
  
    const token = window.localStorage.getItem("token")
   
    await axios.get('http://localhost:3003/image/all', {  
      headers: {
        Authorization: token
      }
    })
    .then(response => {
      setImage(response.data)
    })
    .catch(error => { 
      console.log(error)})
  }

  useEffect(() => {
    getImage()
  }, [])
  
  return(
    <Grid templateColumns="repeat(3, 1fr)">
      {image.map(img => {
        return(
          <Box align="center" p="4" mt="2" maxW="md" borderWidth="1px" borderRadius="lg" key={img.id}>
              <Badge borderRadius="full" px="2" colorScheme="teal">
                {img.subtitle}
              </Badge>
              <Box mt="2" align="center">
                <Img src={img.file} />
              </Box>
              <Box align="start" mt="2">
                Author: {img.author}
              </Box>
              <Box align="start" mt="2"> 
                Date: {img.date}
              </Box>
            </Box>
        )
      })}      
    </Grid>
 )
}
