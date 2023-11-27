import { View } from "react-native";
import { RowOfCategory } from "../components/RowOfCategory";
import { styles } from "../Styles";
import { SideBar } from "../components/SideBar";

const ScreenHome = () => {
  return (
    <View style={styles.container2}>
      <SideBar
        styleView={styles.container4}
        styleIcon={styles.text4}
        styleImage={styles.image3}
      />
      <View style={styles.container3}>
        <RowOfCategory 
          title="Comédias" 
          category="comedy"
          textStyle={styles.text3}
          imageStyle={styles.image2}
        />
        <RowOfCategory
          title="Documentarios"
          category="documentaries"
          textStyle={styles.text3}
          imageStyle={styles.image2}
        />
      </View>
    </View>
  );
}

export { ScreenHome };
