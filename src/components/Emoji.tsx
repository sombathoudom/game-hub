import { ImageProps,Image } from '@chakra-ui/react';
import fire from '../assets/fire.png';
import thumbup from '../assets/thumbup.png';
import neutral_face from '../assets/neutral_face.png';
interface Props {
    rating: number;
}
function Emoji({rating}: Props) {
    if(rating < 3) return null;
    //index 
    const emojiMap:{[key: number]: ImageProps} = {
        3: {src: neutral_face, alt:'meh', boxSize:'25px'},
        4: {src: thumbup, alt:'thumbUp', boxSize:'25px'},
        5: {src: fire, alt:'bullsEye', boxSize:'35px'}
    }
    return (
        <Image {...emojiMap[rating]} marginTop={1}/>
    )
}

export default Emoji