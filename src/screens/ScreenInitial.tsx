import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Image} from 'react-native';
import { styles } from '../Styles';

const ScreenInitial = () => {
  let netflixLogo = require('../../assets/neflix.png');
  let navigation = useNavigation();

  return (
    <View style={styles.container1}>
      <Image style={styles.image1} source={netflixLogo}/>
      <Text style={styles.text2}>WELCOME TO NETFLIX!</Text>
      <Text style={styles.text1}>Swipe left to see what we do</Text>
      <TouchableOpacity style={styles.button1} onPress={() => { navigation.navigate('ScreenHome') }}>
        <Text style={styles.text2}>JOIN NOW</Text>
      </TouchableOpacity>
    </View>
  );
}

export { ScreenInitial };
