import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';

interface Props {
  onSearchInput: (searchText: string) => void
}
function SearhInput({onSearchInput}: Props) {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      if(ref.current) onSearchInput(ref.current.value);
    }}>
      <InputGroup>
          <InputLeftElement children={<BsSearch/>} />
          <Input borderRadius={20} placeholder='Search game...' variant={'filled'} ref={ref}/>
         </InputGroup>
    </form>
  )
}

export default SearhInput