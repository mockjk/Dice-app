import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import Circle from "../components/DiceFace/Circle";
import Diamond from './DiceFace/Diamond';
import Hexagon from './DiceFace/Hexagon';
import HorizontalDiamond from './DiceFace/HorizontalDiamond';
import Pentagon from './DiceFace/Pentagon';
import Square from './DiceFace/Square';
import Triangle from './DiceFace/Triangle';


interface Props {
    diceNumber: number;
    diceFace: string;
}

export default function DiceButton(props: Props){
    return (
        <Pressable style={styles.pressable}>
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