import { Button, HStack, Heading, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenres, {Genre} from '../hooks/useGener';
import getCroppedImageUrl from '../services/image-url';
interface Props {
  onSelectedGenre: (genre:Genre) => void
  selectedGenre: Genre | null
}
function GenreList({onSelectedGenre,selectedGenre}:Props) {
  const { data , isLoading, error} = useGenres();
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
                onClick={() => onSelectedGenre(genre)}
                whiteSpace={'wrap'} textAlign={'left'}
                fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
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