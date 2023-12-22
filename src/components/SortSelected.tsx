import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import useGameQueryStorer from '../store'

function SortSelected() {
    const sortOrders = [
        {value: '', label: 'Relavance'},
        {value: '-added', label: 'Date Added'},
        {value: 'name', label: 'Name'},
        {value: '-released', label: 'Release Date'},
        {value: '-metacritic', label: 'Popularity'},
        {value: 'rating', label: 'Average Rating'},
    ]
    const setSortOrder = useGameQueryStorer(s => s.setSortOrder);
    const sortOrder = useGameQueryStorer(s => s.gameQuery.sortOrder);
    const currentSortOrder = sortOrders.find(order => order.value === sortOrder);
  return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
                Order by: {currentSortOrder?.label || 'Relevance'}
            </MenuButton>
            <MenuList>
                {sortOrders.map((order) => (
                    <MenuItem key={order.value} value={order.value} onClick={() => setSortOrder(order.value)}>{order.label}</MenuItem>
                ))}
               
            </MenuList>
        </Menu>
  )
}

export default SortSelected