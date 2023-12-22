import { Grid, Show, GridItem, Flex, Box } from '@chakra-ui/react'
import React from 'react'
import GameGrid from '../components/GameGrid'
import GameHeading from '../components/GameHeading'
import GenreList from '../components/GenreList'
import PlatformSelector from '../components/PlatformSelector'
import SortSelected from '../components/SortSelected'

function HomePage() {
  return (
    <Grid templateAreas={{
        base: `"main"`,
        lg: `"aside main"`
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}
      >
        <Show above="lg">
          <GridItem area={'aside'} paddingX='5'>
            <GenreList/>
          </GridItem>
        </Show>
        <GridItem area={'main'}>
          <Box paddingLeft={10}>
            <GameHeading/>
            <Flex marginBottom={2} flexWrap={'wrap'}>
                <Box marginRight={5} marginBottom={2}>
                  <PlatformSelector/>
                </Box>
                <SortSelected/>
            </Flex>
          </Box>
          <GameGrid/>
        </GridItem>
      </Grid>
  )
}

export default HomePage