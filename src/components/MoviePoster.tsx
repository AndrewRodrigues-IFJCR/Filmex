import { FC } from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, TouchableOpacity } from "react-native";

// Api
import { Movie, getPosterURI } from "../Api";

interface MoviePosterProps {
  movie: Movie;
}

const MoviePoster: FC<MoviePosterProps> = ({movie}) => {
  let uri = getPosterURI(movie);
  let navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => {navigation.navigate('ScreenMovieDetails', movie)}}>
      <Image source={{uri}}/>
    </TouchableOpacity>
  );
}

export { MoviePoster };
