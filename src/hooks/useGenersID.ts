import useGenres from "./useGener";
const useGenersID = (id? : number) => {
    const {data: genres} = useGenres();
    const genre = genres?.results.find(genre => genre.id === id);
    return genre
}

export default useGenersID;