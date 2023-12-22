import {Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms from '../hooks/usePlatforms';
import { Platform } from "../entities/Platform";
import usePlatform from '../hooks/usePlatform';
import useGameQueryStorer from '../store';
function PlatformSelector() {
    const {data} = usePlatforms();
    const selectedPlatformId = useGameQueryStorer(s => s.gameQuery.platformId);
    const setPlatformId  = useGameQueryStorer(s => s.setPlatformId);

    const selectedPlatform = usePlatform(selectedPlatformId);
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>{selectedPlatform?.name || 'Platform'}</MenuButton>
            <MenuList>
                {data?.results.map((platform) => (
                    <MenuItem key={platform.id} onClick={() => setPlatformId(platform.id)}>{platform.name}</MenuItem>
                ))}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector