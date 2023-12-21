import {Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms, {Platform} from '../hooks/usePlatforms';
import usePlatform from '../hooks/usePlatform';

interface Props {
    onSelectedPlatform : (platform:Platform) => void;
    selectedPlatformId?: number;
}
function PlatformSelector({onSelectedPlatform, selectedPlatformId}: Props) {
    const {data} = usePlatforms();
    const selectedPlatform = usePlatform(selectedPlatformId);
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>{selectedPlatform?.name || 'Platform'}</MenuButton>
            <MenuList>
                {data?.results.map((platform) => (
                    <MenuItem key={platform.id} onClick={() => onSelectedPlatform(platform)}>{platform.name}</MenuItem>
                ))}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector