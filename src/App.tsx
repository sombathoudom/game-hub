import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react'
import { useState } from 'react'
import GameGrid from './components/GameGrid'
import GameHeading from './components/GameHeading'
import GenreList from './components/GenreList'
import NavBar from './components/NavBar'
import PlatformSelector from './components/PlatformSelector'
import SortSelected from './components/SortSelected'

function App() {
  //that is old style
  // const [selectedGenre,setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlateform,setSelectedPlateform] = useState<Platform | null>(null);
  //the new style below
  // const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)


  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}
    templateColumns={{
      base: '1fr',
      lg: '200px 1fr'
    }}
    >
      <GridItem area={'nav'}>
        <NavBar />
      </GridItem>
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

export default App
