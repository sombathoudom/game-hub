import { Box, Button, SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { GameQuery } from '../App';
import React from 'react';

interface Props {
    gameQuery: GameQuery;
    // selectedGenre: Genre | null;
    // selectedPlatform : Platform | null,
}
function GameGrid({gameQuery}:Props) {
    const {data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage} = useGames(gameQuery);
    const skeletons = [1,2,3,4,5,6,7,8,9,10,11,12];
    return (
        <Box padding={10}>
            {error && <Text>{error.message}</Text>} 
            <SimpleGrid columns={{
                sm: 1,
                md:2,
                lg:3,
                xl:4
            }}  spacing={6}>
                {isLoading && skeletons.map((skeleton) => (
                <GameCardContainer key={skeleton}>
                    <GameCardSkeleton key={skeleton} />
                </GameCardContainer>))}
                {data?.pages.map((page, index) => <React.Fragment key={index}>
                    {page.results.map(game => 
                        <GameCardContainer key={game.id}>
                            <GameCard key={game.id} game={game}/>
                        </GameCardContainer>
                    )}
                </React.Fragment>)}
                {/* {data?.results.map(game => 
                    <GameCardContainer key={game.id}>
                        <GameCard key={game.id} game={game}/>
                    </GameCardContainer>
                )} */}
            </SimpleGrid>
            {hasNextPage && <Button marginY={5}  isLoading={isFetchingNextPage} onClick={() => fetchNextPage()}>Load More</Button>}
        </Box>
    )
}

export default GameGrid