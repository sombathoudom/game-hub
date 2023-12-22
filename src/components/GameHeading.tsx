import { Heading } from '@chakra-ui/react';
import useGenersID from '../hooks/useGenersID';
import usePlatform from '../hooks/usePlatform';
import useGameQueryStorer from '../store';
function GameHeading() {
  const genreId = useGameQueryStorer(s => s.gameQuery.genreId);
  const genre = useGenersID(genreId);
  
  const platformId = useGameQueryStorer(s => s.gameQuery.platformId);
  const platforms = usePlatform(platformId);

  const heading = `${platforms?.name || ''} ${genre?.name || ''} Games`;
  return (
    <Heading as="h1" marginY={5} fontSize={"5xl"}>{heading}</Heading>
  )
}

export default GameHeading