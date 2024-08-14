import { Pressable, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import DiceButton from '../components/DiceButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { height, width } from '../constants/measures';
import RealoadSvg from '../assets/RollButton';
import Minus from '../assets/Minus';
import Plus from '../assets/Plus';
import { useState } from 'react';
import History from "../assets/History";

export default function Home({navigation}) {

  const [diceValue, setdiceValue] = useState(Number)

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topArea}>
        <Pressable style={{alignSelf: "flex-end", margin: 20}} onPress={() => navigation.navigate("History")}>
          <History/>
        </Pressable>
        <View style={styles.resultScreen}>
          {diceValue === 0 ? 
          (
            <Text style={{fontSize: 18, fontWeight: "bold", alignSelf: "center"}} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, incidunt?</Text>
          ) : 
          (
            <View>
              {/* Passar props width para o svg para reutilizar os icons no dice value */}
              <Text style={styles.selectedDice}>{diceValue}</Text>
              <View style={styles.controlsResult}>
                <Pressable children={<Minus/>}/>
                <Text children="100" style={{fontSize: 58, fontWeight: "bold"}}/> 
                {/* RESULT */}
                <Pressable children={<Plus/>}/>
              </View>
            </View>
          )}
          
        </View>
      </View>
      <Pressable style={styles.rollButton} children={<RealoadSvg/>}/>
      <View style={styles.footer}>
        <View style={styles.groupButtons}>
          {[
            { number: 2, diceFormat: "Circle" },
            { number: 4, diceFormat: "Triangle" },
            { number: 6, diceFormat: "Square" },
            { number: 8, diceFormat: "Diamond" }
          ].map((num) => (
            <DiceButton key={num.number} diceNumber={num.number} diceFace={num.diceFormat} action={setdiceValue}/>
          ))}
        </View>
        <View style={styles.groupButtons}>
        {[
          { number: 10, diceFormat: "HorizontalDiamond" },
          { number: 12, diceFormat: "Pentagon" },
          { number: 20, diceFormat: "Hexagon" },
          { number: 100, diceFormat: "HorizontalDiamond" }].map((num) => (
            <DiceButton diceNumber={num.number} key={num.number} diceFace={num.diceFormat} action={() => setdiceValue(num.number)}/>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    height: height,
  },
  topArea:{
    height: height*0.7,
    width: width,
    alignItems: "center",
    justifyContent: 'space-between',
  },
  resultScreen: {
    width: width,
    marginBottom: height*0.065
  },
  selectedDice: {
    fontSize: 24, 
    alignSelf: "center", 
    marginBottom: -height*0.02,
  },
  controlsResult:{
    width: width,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

  },
  rollButton:{
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: "#FFFFFF",
    position: "absolute",
    bottom: height*0.262,
    zIndex: 1,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  footer:{
    height: height*0.3,
    width: width,
    justifyContent: "center",
    gap: 25,
    backgroundColor: "#F6F6F6",
  },
  groupButtons: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
});
