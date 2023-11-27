import { View } from "react-native";
import { RowOfCategory } from "../components/RowOfCategory";
import { styles } from "../Styles";
import { SideBar } from "../components/SideBar";

const ScreenHome = () => {
  return (
    <View style={styles.ContainerDefaultWhite}>
      <SideBar
        styleView={styles.ContainerSiderBarBlack}
        styleIcon={styles.FontMediumWhite}
        styleImage={styles.ImageIcon}
      />
      <View style={styles.ContainerBottomRightWhite}>
        <RowOfCategory 
          title="Comédias" 
          category="comedy"
          textStyle={styles.FontMediumGray}
          imageStyle={styles.ImagePoster}
        />
        <RowOfCategory
          title="Documentarios"
          category="documentaries"
          textStyle={styles.FontMediumGray}
          imageStyle={styles.ImagePoster}
        />
      </View>
    </View>
  );
}

export { ScreenHome };
