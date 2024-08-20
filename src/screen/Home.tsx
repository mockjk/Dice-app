import { Pressable, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { height, width } from '../constants/measures';
import DiceButton from '../components/DiceButton';
import Reset from '../components/Svg/Reset';
import Minus from '../components/Svg/Minus';
import Plus from '../components/Svg/Plus';
import History from "../components/Svg/History";
import Triangle from '../components/Svg/Triangle';
import Circle from '../components/Svg/Circle';
import Square from '../components/Svg/Square';
import Diamond from '../components/Svg/Diamond';
import HorizontalDiamond from '../components/Svg/HorizontalDiamond';
import Pentagon from '../components/Svg/Pentagon';
import Hexagon from '../components/Svg/Hexagon';
import getDiceNumber from '../functions/getDiceNumber';

//@ts-ignore
export default function Home({ navigation }) {

  interface Result {
    numbers: number[];
    sum: number;
    dice?: string;
  }

  const [history, setHistory] = useState<Result[]>([])
  const [diceValue, setDiceValue] = useState(Number)
  const [diceAmount, setDiceAmount] = useState(1)
  const [result, setResult] = useState<Result>({numbers: [], sum: 0})
  const [diceGroup, setDiceGroup] = useState([
    {id: 1, number: 2, diceFormat: "Circle", counter: 0},
    {id: 2, number: 4, diceFormat: "Triangle", counter: 0 },
    {id: 3, number: 6, diceFormat: "Square", counter: 0 },
    {id: 4, number: 8, diceFormat: "Diamond", counter: 0 },
    {id: 5, number: 10, diceFormat: "HorizontalDiamond", counter: 0 },
    {id: 6, number: 12, diceFormat: "Pentagon", counter: 0 },
    {id: 7, number: 20, diceFormat: "Hexagon", counter: 0 },
    {id: 8, number: 100, diceFormat: "HorizontalDiamond", counter: 0 }
  ])

  const counter = (id : number) => {
    setDiceGroup((prevData) => prevData.map((item) => item.id === id ? {...item, counter: item.counter + 1} : {...item, counter: 0}))
  }

  const roll = (diceValue: number, amount: number) =>{
    const result = getDiceNumber(diceValue, amount)
    const resultWithDice : Result = ({
      numbers: result.numbers,
      sum: result.sum,
      dice: `D${diceValue}`
    })
    setResult(result)
    setHistory((prevHistory) => [resultWithDice, ...prevHistory] )
  }

  const buttonAction = (number: number, amount: number, id: number) => {
    setDiceValue(number); 
    roll(number, amount); 
    counter(id);
  }

  const reset = () => {
    setDiceAmount(1); 
    setDiceValue(0); 
    setDiceGroup((prevCount) => prevCount.map((count) => ({...count, counter: 0})))
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topArea}>
        <Pressable style={{alignSelf: "flex-end", margin: 20}} onPress={() => navigation.navigate("History", {history})}>
          <History/>
        </Pressable>
        <View style={styles.resultScreen}>
          {diceValue === 0 ? 
          (
            <Text style={{fontSize: 18, fontWeight: "bold", alignSelf: "center"}} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, incidunt?</Text>
          ) : 
          (
            <View style={{height: height*0.13}}>

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
                <Text style={{fontSize: 24, color: "#787878", fontWeight: "bold", marginTop: -3}} children={diceAmount}/>
              </View>
              
              <View style={styles.controlsResult}>
                <Pressable children={<Minus/>} onPress={() => setDiceAmount( diceAmount -1 )} disabled={diceAmount === 1}/>
                {/* RESULT */}
                <Text children={result.sum} style={{fontSize: 58, fontWeight: "bold"}}/>
                <Pressable children={<Plus/>} onPress={() => setDiceAmount( diceAmount + 1)}/>
              </View>
              {diceAmount > 1 && <Text children={result.numbers.toString()} style={{alignSelf: "center", color: "#787878", fontSize: 18, paddingHorizontal: 24}}/> } 
            </View>
          )}
          
        </View>
      </View>
      <Pressable style={styles.reset} children={<Reset/>} onPress={() => reset()}/>
      <View style={styles.footer}>
        <View style={styles.groupButtons}>
          {diceGroup.slice(0,4).map((dice) => (
            <DiceButton key={dice.number} counter={dice.counter.toString()} diceNumber={dice.number} diceFace={dice.diceFormat} action={() => buttonAction(dice.number, diceAmount, dice.id)}/>
          ))}
        </View>
        <View style={styles.groupButtons}>
        {diceGroup.slice(4, 8).map((dice) => (
            <DiceButton key={dice.number} counter={dice.counter.toString()} diceNumber={dice.number} diceFace={dice.diceFormat} action={() => buttonAction(dice.number, diceAmount, dice.id)}/>
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
    height: height*0.04,
    marginBottom: -height*0.015,
  },
  controlsResult:{
    width: width,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 32,
  },
  reset:{
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

