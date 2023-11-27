// React
import { FC } from "react";
import { FlatList, Image, ImageStyle, TextStyle, View, ViewStyle } from "react-native";

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { faDownload } from '@fortawesome/free-solid-svg-icons/faDownload';

// Globals
import { globals } from "../Globals";

// Properties of Component
interface SideBarProps {
  styleView: ViewStyle;
  styleIcon: TextStyle;
  styleImage: ImageStyle;
}

// Component
const SideBar: FC<SideBarProps> = ({ styleView, styleImage, styleIcon }) => {
  let size = styleIcon.fontSize;
  let color = styleIcon.color?.toString();
  let icons = [ faHome, faSearch, faDownload ];

  return (
    <View style={styleView}>
      <Image 
        style={styleImage} 
        source={globals.netflix}
      />
      <FlatList
        data={icons}
        renderItem={
          ({item}) => (
            <FontAwesomeIcon 
              icon={item} 
              size={size} 
              style={{ color, margin: 10 }}
            />
          )
        }
      />
    </View>
  );
}

// Export
export { SideBar };
