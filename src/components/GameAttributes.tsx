import React from 'react'
import { Game } from '../entities/Game'
import { SimpleGrid, Text } from '@chakra-ui/react';
import CriticScore from './CriticScore';
import DefinitionItem from './DefinitionItem';
import ExpandableText from './ExpandableText';

interface Props {
    game: Game;
}
function GameAttributes({game}: Props) {
  return (
    <SimpleGrid columns={2} as="dl" >
       
        <DefinitionItem term="Platform">
          {game.parent_platforms?.map(({platform}) => <Text key={platform.id}>{platform.name}</Text> )}
        </DefinitionItem>
        <DefinitionItem term="Metascore">
          <CriticScore score={game.metacritic}/>
        </DefinitionItem>
        <DefinitionItem term="Genres">
          {game.genres.map((genre) => {
            return <Text key={genre.id}>{genre.name}</Text>
          })}
        </DefinitionItem>
        <DefinitionItem term="Publisher">
          {game.publishers.map((publisher) => {
            return <Text key={publisher.id}>{publisher.name}</Text>
          })} 
        </DefinitionItem>
      </SimpleGrid>
  )
}

export default GameAttributes