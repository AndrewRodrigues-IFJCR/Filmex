import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Image} from 'react-native';
import { styles } from '../Styles';

const ScreenInitial = () => {
  let netflixLogo = require('../../assets/neflix.png');
  let navigation = useNavigation();

  return (
    <View style={styles.ContainerDefaultBlack}>
      <Image style={styles.ImageLogo} source={netflixLogo}/>
      <Text style={styles.FontMediumWhite}>WELCOME TO NETFLIX!</Text>
      <Text style={styles.FontSmallWhite}>Swipe left to see what we do</Text>
      <TouchableOpacity style={styles.ButtonDefaultRed} onPress={() => { navigation.navigate('ScreenHome') }}>
        <Text style={styles.FontMediumWhite}>JOIN NOW</Text>
      </TouchableOpacity>
    </View>
  );
}

export { ScreenInitial };
