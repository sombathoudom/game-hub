import React from 'react'
import { Game } from "../entities/Game";
import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';
import GameCardContainer from './GameCardContainer';
import Emoji from './Emoji';
import { Link } from 'react-router-dom';
interface Props {
    game: Game
}

function GameCard({game}: Props) {
  return (
      <Card _light={{bg: 'whitesmoke'}} >
          <Image src={getCroppedImageUrl(game.background_image)}/>
          <CardBody>
              <HStack justifyContent={'space-between'} margin={3}>
                <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
                <CriticScore score={game.metacritic}/>
              </HStack>
              <Heading fontSize='2xl'>
                <Link to={'/game/'+game.slug}>
                  {game.name}
                </Link>
                </Heading>
              <Emoji rating={game.rating_top}/>
          </CardBody>
      </Card>
  )
}

export default GameCard