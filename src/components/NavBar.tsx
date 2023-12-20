import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/react.svg';
import React from 'react'
import ColorModeSwitch from './ColorModeSwitch';

function NavBar() {
  return (
    <HStack justifyContent='space-between' padding="10px">
        <Image src={logo} alt="Vercel Logo" boxSize="60px"  />
        <ColorModeSwitch/>
    </HStack>
  )
}

export default NavBar