import { StyleSheet, Text, View } from 'react-native';
import DiceButton from './src/components/DiceButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { height, width } from './src/constants/measures';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.resultScreen}>
      </View>
      <View style={styles.footer}>
        <View style={styles.groupButtons}>
          {[
            { number: 2, diceFormat: "Circle" },
            { number: 4, diceFormat: "Triangle" },
            { number: 6, diceFormat: "Square" },
            { number: 8, diceFormat: "Diamond" }
          ].map((num) => (
            <DiceButton key={num.number} diceNumber={num.number} diceFace={num.diceFormat} />
          ))}
        </View>
        <View style={styles.groupButtons}>
        {[
          { number: 10, diceFormat: "HorizontalDiamond" },
          { number: 12, diceFormat: "Pentagon" },
          { number: 20, diceFormat: "Hexagon" },
          { number: 100, diceFormat: "HorizontalDiamond" }].map((num) => (
            <DiceButton diceNumber={num.number} key={num.number} diceFace={num.diceFormat}/>
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
  resultScreen:{
    height: height*0.7,
    width: width,
  },
  groupButtons: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  footer:{
    height: height*0.3,
    width: width,
    justifyContent: "center",
    gap: 25,
    backgroundColor: "#F6F6F6",
  }
});
