// import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, StatusBar } from 'react-native';


const screens = [
  {text: "Its \nCold \nOutside", iconName: "md-snow", temp:"11", bg:"#16e5ff"},
  {text: "Its \nRaining \nNow", iconName: "md-rainy", temp:"18", bg:"#ff81e5"},
  {text: "Sunny \nDay \nWalk", iconName: "md-sunny", temp:"28", bg:"#ff8362"}

];

const showScreen = screens[2];
const ScreenHeight = Dimensions.get("window").height;
const ScreenWidth = Dimensions.get("window").width;

StatusBar.setBarStyle("light-content");
StatusBar.setBackgroundColor(showScreen.bg);


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <View style={styles.view2}>
          <Text style={styles.text1}>{showScreen.text}</Text>
          {/* <Ionicons name="md-snow" size={50} /> */}
        </View>
        <View style={styles.view3}></View>
        <View style={styles.view4}><Text style={styles.text2}>{showScreen.temp }&deg;</Text></View>

      </View>
      <View style={styles.view5}>
          <Image source={
            (showScreen.temp == "11" && require('./assets/images/cold.png')) ||
            (showScreen.temp == "18" && require('./assets/images/rainy.png')) ||
            (showScreen.temp == "28" && require('./assets/images/sunny.png'))} style={styles.image1}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1

  },

  view1: {
    flex: 1,
    backgroundColor: showScreen.bg,
    paddingTop: ScreenHeight*0.1,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },

  view2: {
    flexDirection: "row", 
    paddingHorizontal: 36,
    justifyContent: "space-between"
  }, 

  view3: {
    width: 30,
    height: 3, 
    backgroundColor: "#fff",
    marginLeft: 36,
    margin: 8,
    marginBottom: ScreenHeight*0.05
  }, 

  view4: {
    alignItems: "center",
    width: ScreenWidth,
    justifyContent: "center",
    margin: 10,
  }, 

  view5: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }, 

  text1: {
    color: "#fff",
    fontSize: 36
  },

  text2: {
    color: "#fff",
    fontSize: 48
  },

  image1: {
    width: ScreenWidth*0.8,
    resizeMode: "contain",
  }

});
