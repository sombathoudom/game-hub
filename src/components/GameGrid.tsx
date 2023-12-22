import { Box, Button, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import useGameQueryStorer from '../store';

function GameGrid() {
    const {data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage} = useGames();
    const skeletons = [1,2,3,4,5,6,7,8,9,10,11,12];
    const fetchedGameCount = data?.pages.reduce((total,page) => total + page.results.length, 0) || 0;
    return (
        <Box padding={10}>
            {error && <Text>{error.message}</Text>} 
            <InfiniteScroll 
            dataLength={fetchedGameCount}
            hasMore={!!hasNextPage}
            next={() => fetchNextPage()}
            loader={<Spinner/>}
            >
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
            </InfiniteScroll>
            {/* {hasNextPage && <Button marginY={5}  isLoading={isFetchingNextPage} onClick={() => fetchNextPage()}>Load More</Button>} */}
        </Box>
    )
}

export default GameGrid