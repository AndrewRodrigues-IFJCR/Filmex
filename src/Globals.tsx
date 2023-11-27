import { ImageSourcePropType } from "react-native";

interface Globals {
  netflix: ImageSourcePropType

}

const globals: Globals = {
  netflix: require('../assets/neflix.png')
}

export { globals };
