import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/react.svg';
import React from 'react'

function NavBar() {
  return (
    <HStack>
        <Image src={logo} alt="Vercel Logo" boxSize="60px"  />
        <Text>NavBar</Text>
    </HStack>
  )
}

export default NavBar