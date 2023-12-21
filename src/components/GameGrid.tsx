import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/useGener';
import { Platform } from '../hooks/usePlatforms';
import { GameQuery } from '../App';

interface Props {
    gameQuery: GameQuery;
    // selectedGenre: Genre | null;
    // selectedPlatform : Platform | null,
}
function GameGrid({gameQuery}:Props) {
    const {data, error, isLoading} = useGames(gameQuery);
    const skeletons = [1,2,3,4,5,6,7,8,9,10,11,12];
    return (
        <>
            {error && <Text>{error}</Text>} 
            <SimpleGrid columns={{
                sm: 1,
                md:2,
                lg:3,
                xl:4
            }} padding={10} spacing={6}>
                {isLoading && skeletons.map((skeleton) => (
                <GameCardContainer key={skeleton}>
                    <GameCardSkeleton key={skeleton} />
                </GameCardContainer>))}
                {data.map(game => 
                    <GameCardContainer key={game.id}>
                        <GameCard key={game.id} game={game}/>
                    </GameCardContainer>
                )}
            </SimpleGrid>
        </>
    )
}

export default GameGrid