import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'
import useGenres from '../hooks/useGener';
import usePlatform from '../hooks/usePlatform';
import useGenersID from '../hooks/useGenersID';
interface Props {
    gameQuery: GameQuery
}
function GameHeading({gameQuery}:Props) {
  const platforms = usePlatform(gameQuery.genreId);
  const genre = useGenersID(gameQuery.platformId);

  const heading = `${platforms?.name || ''} ${genre?.name || ''} Games`;
  return (
    <Heading as="h1" marginY={5} fontSize={"5xl"}>{heading}</Heading>
  )
}

export default GameHeading