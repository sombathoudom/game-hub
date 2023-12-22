import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import useGameQueryStorer from '../store';


function SearhInput() {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStorer(s => s.setSearchText);
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      if(ref.current) setSearchText(ref.current.value);
    }}>
      <InputGroup>
          <InputLeftElement children={<BsSearch/>} />
          <Input borderRadius={20} placeholder='Search game...' variant={'filled'} ref={ref}/>
         </InputGroup>
    </form>
  )
}

export default SearhInput