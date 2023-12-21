import { Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import {Genre} from './hooks/useGener';
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './hooks/usePlatforms'
import SortSelected from './components/SortSelected'

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
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
        <NavBar/>
      </GridItem>
      <Show above="lg">
        <GridItem area={'aside'} paddingX='5'>
          <GenreList onSelectedGenre={(genre) => setGameQuery({...gameQuery, genre})} selectedGenre={gameQuery.genre}/>
        </GridItem>
      </Show>
      <GridItem area={'main'}>
        <HStack paddingLeft={10} marginBottom={5} spacing={5}>
          <PlatformSelector selectedPlatform={gameQuery.platform} onSelectedPlatform={(platform) => setGameQuery({...gameQuery, platform})}/>
          <SortSelected sortOrder={gameQuery.sortOrder} onSelectedSort={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}/>
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  )
}

export default App
