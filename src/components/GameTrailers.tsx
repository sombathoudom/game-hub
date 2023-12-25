import React from 'react'
import useTrailer from '../hooks/useTrailers'
interface Props {
    gameId: number;
}
function GameTrailers({gameId}: Props) {
    const {data, error, isLoading} = useTrailer(gameId);
    console.log(data);
    const first = data?.results[0];
    if(isLoading) return null;
    if(error) throw error;
    return (
       <video src={first?.data["480"]} poster={first?.preview} controls autoPlay></video>
    )
}

export default GameTrailers