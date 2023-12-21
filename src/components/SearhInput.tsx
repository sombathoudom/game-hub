import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs'
function SearhInput() {
  return (
    <InputGroup>
        <InputLeftElement children={<BsSearch/>} />
        <Input borderRadius={20} placeholder='Search game...' variant={'filled'}/>
   </InputGroup>
  )
}

export default SearhInput