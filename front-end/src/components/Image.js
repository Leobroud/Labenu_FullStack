import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Badge, Img } from "@chakra-ui/react"


export const AllImage = () => {

  const [ image, setImage] = useState([])

  const getImage = async () => {

    await axios.get('https://backend-fullstack-labenu.herokuapp.com/image/all', {  
    headers: {
      Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjRmNGVhODg2LWNlMTctNGJkZC04YmZlLTY5ZDEzNmUyMjhjMyIsImlhdCI6MTYwNzk3NzY0OSwiZXhwIjoxNjA3OTc4MjQ5fQ.z7rhqgejCPKINJPG87PgAUkXCfw0HQ9Bv2QwT8TXnEw'
    }
    }
    )
    .then(response => {
      console.log(response.data)
      setImage(response.data)
    })
    .catch(error =>{

    })
  }

  useEffect(() => {
    getImage()
  }, [])
  
  return(
    <Box >
      {image.map(img => {
        return(
          <Box align="center" m='1' p="4" maxW="lg" borderWidth="1px" borderRadius="lg" key={img.id}>
              <Badge borderRadius="full" px="2" colorScheme="teal">
                {img.subtitle}
              </Badge>
              <Img src="(img.file)" mt="2" align="center"/>
                {/* {img.file} */}
              <Box align="start" mt="2">
                Author: {img.author}
              </Box>
              <Box align="start" mt="2"> 
                Date: {img.date}
              </Box>
            </Box>
        )
      })}      
    </Box>
 )
}
