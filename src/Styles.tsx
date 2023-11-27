import { StyleSheet } from "react-native";

// Combine Function
interface combineObjectsProps {
  prefix: string;
  obj1: object;
  obj2: object;
  makeNew: Function;
};

const combineObjects = ({prefix, obj1, obj2, makeNew}: combineObjectsProps) => {
  let obj3: object = {};
  let val3: any;
  let attr3: string;

  Object.entries(obj1).map(([attr1, val1]) => {
    Object.entries(obj2).map(([attr2, val2]) => {
      attr3 = `${prefix}${attr1}${attr2}`;
      val3 = makeNew(val1, val2);
      obj3[attr3] = val3;
    });
  });
  return obj3;
}

// Colors

// Set Atributtes
const colors: object = {
  White: '#ffffff',
  Black: '#070707',
  Gray: '#3f3f3f',
  Red: '#f42c1d',
};

// Fonts

// Make Function
const makeFont = (val1: number, val2: string) => { 
  return {fontSize:val1, color: val2};
};

// Set Atributtes
const fontSizes = {
  Small: 16,
  Medium: 22,
  Larger: 26,
};

// Create Styles
const fonts = combineObjects({
  prefix:'Font',
  obj1:fontSizes,
  obj2:colors,
  makeNew:makeFont
});

// Buttons

// Make Function
const makeButton = (val1:object, val2: string) => {
  return { ...val1, backgroundColor: val2 };
};

// Set Atributtes
const buttonShapes = {
  Default: { padding: 10 }
};

// Create Styles
const buttons = combineObjects({
  prefix:'Button',
  obj1: buttonShapes,
  obj2: colors,
  makeNew:makeButton
});

// Containers

// Make Function
const makeContainer = (val1: object, val2: string) => {
  const baseContainer = {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  };
  return { ...baseContainer, ...val1, backgroundColor: val2 };
};

// Set Atributtes
const containerLayouts = {
  Default: {},
  SiderBar: {
    left: 0,
    width: '20%',
    height: '100%',
    position: 'absolute',
    paddingVertical:  30,
  },
  BottomRight: {
    marginTop: 100,
    marginLeft: 100,
  },
};

// Create Styles
const containers = combineObjects({
  prefix:'Container',
  obj1: containerLayouts,
  obj2: colors,
  makeNew: makeContainer
})

// Imagens

// Make Function

// Set Atributes

// Create Styles
const imagens = {
  ImageIcon: {
    width: 50,
    height: 50,
  },
  ImageLogo: {
    width: 100,
    height: 100
  },
  ImagePoster: {
    width: 200,
    height: 250,
    margin:  10,
  },
};

// Create Style Sheet
const styles = StyleSheet.create({ 
  ...fonts,
  ...buttons,
  ...imagens,
  ...containers,
});

export { styles };
