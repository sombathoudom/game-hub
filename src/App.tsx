import { Grid, GridItem, HStack, Show, Flex , Box} from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import {Genre} from './hooks/useGener';
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './hooks/usePlatforms'
import SortSelected from './components/SortSelected'
import GameHeading from './components/GameHeading'
export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}
function App() {
  //that is old style
  // const [selectedGenre,setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlateform,setSelectedPlateform] = useState<Platform | null>(null);
  //the new style below
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

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
        <NavBar onSearchInput={(searchText) => setGameQuery({...gameQuery, searchText})} />
      </GridItem>
      <Show above="lg">
        <GridItem area={'aside'} paddingX='5'>
          <GenreList onSelectedGenre={(genre) => setGameQuery({...gameQuery, genreId: genre.id})} selectedGenreID={gameQuery.genreId}/>
        </GridItem>
      </Show>
      <GridItem area={'main'}>
        <Box paddingLeft={10}>
          <GameHeading gameQuery={gameQuery}/>
          <Flex marginBottom={2} flexWrap={'wrap'}>
              <Box marginRight={5} marginBottom={2}>
                <PlatformSelector selectedPlatformId={gameQuery.platformId} onSelectedPlatform={(platform) => setGameQuery({...gameQuery, platformId: platform.id})}/>
              </Box>
              <SortSelected sortOrder={gameQuery.sortOrder} onSelectedSort={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}/>
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  )
}

export default App
