// React
import { FlatList, Text, Image, ImageStyle, TextStyle } from 'react-native';
import { useEffect, useState } from 'react';

import { Movie, getMovies, getPosterURI } from '../Api' // Api

interface RowOfCategoryProps {
  title: string
  category: string
  textStyle: TextStyle
  imageStyle: ImageStyle

}

const RowOfCategory = ({title, category, textStyle, imageStyle}: RowOfCategoryProps) => {
 const [movies, setMovies] = useState<Movie[]>([]); 

 const fetchMovies = async () => {
   try {
     let data = await getMovies(category);
     setMovies(data);
   } catch (error) {
     console.error('Error fetching movies:', error);
   }
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  const renderItem = ({item}: {item: Movie}) => {
    let uri = getPosterURI(item)
    return (<Image style={imageStyle} source={{uri}}/>);
  }

  return (
    <>
      <Text style={textStyle}>{title}</Text>
      <FlatList
        data={movies}
        renderItem={renderItem}
        horizontal
      />
    </>
  );
}

export { RowOfCategory };
