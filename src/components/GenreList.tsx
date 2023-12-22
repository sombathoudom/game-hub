import { Button, HStack, Heading, Image, List, ListItem, Spinner } from '@chakra-ui/react';
import useGenres from '../hooks/useGener';
import getCroppedImageUrl from '../services/image-url';
import useGameQueryStorer from '../store';

function GenreList() {
  const { data , isLoading, error} = useGenres();
  const selectedGenerId = useGameQueryStorer(s => s.gameQuery.genreId);
  const setSelectedGenerId = useGameQueryStorer(s => s.setGenreId);

  if (error) return null;
  if (isLoading) return <Spinner/>;
  return (
    <>
    <Heading fontSize={'2xl'} marginBottom={3}>Genres</Heading>
    <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image boxSize="32px" borderRadius={8} src={getCroppedImageUrl(genre.image_background)} objectFit={'cover'}/>
              <Button fontSize={'lg'} variant={'link'} 
                onClick={() => setSelectedGenerId(genre.id)}
                whiteSpace={'wrap'} textAlign={'left'}
                fontWeight={genre.id === selectedGenerId ? 'bold' : 'normal'}
              >
                {genre.name}
              </Button> 
            </HStack>
          </ListItem>
        ))}
    </List>
    </>
  )
}

export default GenreList