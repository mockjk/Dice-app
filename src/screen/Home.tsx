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
import Triangle from '../assets/Triangle';
import Circle from '../assets/Circle';
import Square from '../assets/Square';
import Diamond from '../assets/Diamond';
import HorizontalDiamond from '../assets/HorizontalDiamond';
import Pentagon from '../assets/Pentagon';
import Hexagon from '../assets/Hexagon';
import getDiceNumber from '../functions/getDiceNumber';

//@ts-ignore
export default function Home({ navigation }) {

  interface Result {
    numbers: number[];
    sum: number;
  }

  const [diceValue, setDiceValue] = useState(Number)
  const [diceAmount, setDiceAmount] = useState(1)
  const [result, setResult] = useState<Result>({numbers: [], sum: 0})
  
  function roll(diceValue: number, amount: number){
    setResult(getDiceNumber(diceValue, amount))
    return
  }

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

              <View style={styles.diceAmount}>
              {(() => {
                  switch (diceValue) {
                    case 2: 
                        return <Circle width="25px" fill="#787878"/>;
                        
                    case 4: 
                        return <Triangle width="25px" fill="#787878"/>;
                        
                    case 6: 
                        return <Square width="25px" fill="#787878"/>;
                        
                    case 8:
                        return <Diamond width="25px" fill="#787878"/>;
                        
                    case 10: 
                        return <HorizontalDiamond width="25px" fill="#787878"/>;
                        
                    case 12: 
                        return <Pentagon width="25px" fill="#787878"/>;
                        
                    case 20: 
                        return <Hexagon width="25px" fill="#787878"/>;
                    
                    case 100: 
                      return <HorizontalDiamond width="25px" fill="#787878"/>;
                  }
                  })()}
                <Text style={{fontSize: 24, color: "#787878", marginBottom: 4, fontWeight: "bold"}} children={diceAmount}/>
              </View>
              
              <View style={styles.controlsResult}>
                <Pressable children={<Minus/>} onPress={() => setDiceAmount( diceAmount -1 )} disabled={diceAmount === 1}/>
                <Text children={result.sum} style={{fontSize: 58, fontWeight: "bold"}}/>
                {/* RESULT */}
                <Pressable children={<Plus/>} onPress={() => setDiceAmount( diceAmount + 1)}/>
              </View>
              {diceAmount > 1 && <Text children={result.numbers.toString()} style={{alignSelf: "center", color: "#787878", fontSize: 18}}/> } 
            </View>
          )}
          
        </View>
      </View>
      <Pressable style={styles.rollButton} children={<RealoadSvg/>} onPress={() => roll(diceValue, diceAmount)}/>
      <View style={styles.footer}>
        <View style={styles.groupButtons}>
          {[
            { number: 2, diceFormat: "Circle" },
            { number: 4, diceFormat: "Triangle" },
            { number: 6, diceFormat: "Square" },
            { number: 8, diceFormat: "Diamond" }
          ].map((num) => (
            <DiceButton key={num.number} diceNumber={num.number} diceFace={num.diceFormat} action={setDiceValue}/>
          ))}
        </View>
        <View style={styles.groupButtons}>
        {[
          { number: 10, diceFormat: "HorizontalDiamond" },
          { number: 12, diceFormat: "Pentagon" },
          { number: 20, diceFormat: "Hexagon" },
          { number: 100, diceFormat: "HorizontalDiamond" }].map((num) => (
            <DiceButton diceNumber={num.number} key={num.number} diceFace={num.diceFormat} action={setDiceValue}/>
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
    marginBottom: height*0.065,
  },
  diceAmount: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    justifyContent: "center",
    height: height*0.03,
    marginBottom: -height*0.015,
  },
  controlsResult:{
    width: width,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

  },
  rollButton:{
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#ffffff",
    position: "absolute",
    bottom: height*0.262,
    zIndex: 1,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  footer:{
    height: height*0.3,
    width: width,
    justifyContent: "center",
    gap: 8,
    backgroundColor: "#F6F6F6",
  },
  groupButtons: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
});
