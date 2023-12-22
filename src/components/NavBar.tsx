import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/react.svg';
import React from 'react'
import ColorModeSwitch from './ColorModeSwitch';
import SearhInput from './SearhInput';

function NavBar() {
  return (
    <HStack padding="10px">
        <Image src={logo} alt="Vercel Logo" boxSize="60px"  />
        <SearhInput/>
        <ColorModeSwitch/>
    </HStack>
  )
}

export default NavBar