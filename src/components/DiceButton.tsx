import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import Circle from "../assets/Circle";
import Diamond from '../assets/Diamond';
import Hexagon from '../assets/Hexagon';
import HorizontalDiamond from '../assets/HorizontalDiamond';
import Pentagon from '../assets/Pentagon';
import Square from '../assets/Square';
import Triangle from '../assets/Triangle';


interface Props {
    diceNumber: number;
    diceFace: string;
    action: React.Dispatch<React.SetStateAction<number>>;
}

export default function DiceButton(props: Props){
    return (
        <Pressable style={styles.pressable} onPress={() => props.action(props.diceNumber)}>
            <Text style={styles.text} children={`D${props.diceNumber}`}/>
            {(() => {
       switch (props.diceFace) {
        case "Circle": 
            return <Circle />;
            
        case "Diamond": 
            return <Diamond />;
            
        case "Hexagon": 
            return <Hexagon />;
            
        case "HorizontalDiamond":
            return <HorizontalDiamond />;
            
        case "Pentagon": 
            return <Pentagon />;
            
        case "Square": 
            return <Square />;
            
        case "Triangle": 
            return <Triangle />;
            
    }
      })()}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    pressable:{
        justifyContent: "center", 
        alignItems: "center",
    },
    text:{
        position: "absolute",
        color: "#FFFFFF",
        zIndex: 1,
    }
});