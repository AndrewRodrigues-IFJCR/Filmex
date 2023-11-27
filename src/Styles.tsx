import { StyleSheet } from "react-native";

// Colors
const colorsNames = ['White', 'Black', 'Gray', 'Red'];
const colorsValues = ['#ffffff', '#070707', '#3f3f3f', '#f42c1d'];

// Font Sizes
const fontSizesNames = ['Small', 'Medium', 'Larger'];
const fontSizesValues = [16, 22, 26];

// Fonts
const createFontsNames = () => {
  let fontsNames: Array<string> = [];
  let fontName: string = '';

  colorsNames.forEach(colorName => {
    fontSizesNames.forEach(fontSizeName => {
      fontName = colorName + fontSizeName;
      fontsNames.push(fontName);
    });
  });

  return fontsNames;
};

const createFontsValues = () => {
  let fontValues: Array<object> = [];
  let fontValue: object = {};

  colorsValues.forEach(colorValue => {
    fontSizesValues.forEach(fontSizeValue => {
      fontValue = { color: colorValue, fontSize: fontSizeValue };
      fontValues.push(fontValue);
    });
  });

  return fontValues;
}

const fontsNames = createFontsNames();
const fontValues = createFontsValues();


// 
interface Style {
   container1: object;
   container2: object;
   container3: object;
   container4: object;
   text1: object;
   text2: object;
   text3: object;
   text4: object;
   button1: object;
   image1: object;
   image2: object;
   image3: object;
}

const styles: Style = StyleSheet.create({

  // Container
  container1: {
     flex:1,
     padding: 10,
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor:'#070707',
  },
  container2: {
    flex:1,
    //paddingTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#fff',
  },
  container3: {
    marginTop: 100,
    marginLeft: 100,
  },
  container4: {
    width: 70, 
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#070707',

    position: 'absolute',
    left: 0,
  },

  // texts
  text1: {
     color:'#fff',
     fontSize: 16,
  },
  text2: {
     color: '#fff',
     fontSize: 26,
  },
  text3: {
    color: '#3f3f3f',
    fontSize: 22,
  },
  text4: {
    color: '#fff',
    fontSize: 25,
    margin: 10,
  },

  // Buttons
  button1: {
     padding: 10,
     backgroundColor:'#f42c1d',
  },

  // Images
  image1: {
     width: 100,
     height: 100
  },
  image2: {
     width: 200,
     height: 250,
     margin: 10,
  },
  image3: {
    width: 50,
    height: 50,
    marginTop: 30,
    marginBottom: 500,
  }
});

export { styles };
