import {Button, Menu, MenuButton, MenuList,MenuItem } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms from '../hooks/usePlatforms';
function PlatformSelector() {
    const {data} = usePlatforms();
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>Platform</MenuButton>
            <MenuList>
                {data.map((platform) => (
                    <MenuItem key={platform.id}>{platform.name}</MenuItem>
                ))}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector