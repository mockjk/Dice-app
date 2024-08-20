import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Circle from "./Svg/Circle";
import Diamond from './Svg/Diamond';
import Hexagon from './Svg/Hexagon';
import HorizontalDiamond from './Svg/HorizontalDiamond';
import Pentagon from './Svg/Pentagon';
import Square from './Svg/Square';
import Triangle from './Svg/Triangle';

interface Props {
    diceNumber: number;
    diceFace: string;
    action: React.Dispatch<React.SetStateAction<number>>;
    counter: string;
}

export default function DiceButton(props: Props){
    return (
        //@ts-ignore
        <Pressable style={styles.pressable} onPress={props.action}>
            <Text style={styles.text} children={`D${props.diceNumber}`}/>
            
            {(() => {
       switch (props.diceFace) {
        case "Circle": 
            return(
                <View>
                    {props.counter !== "0" && 
                        <View style={styles.count}>
                            <Text style={{color: "white"}} children={props.counter}/>
                        </View>
                    }
                    <Circle />
                </View>
                
            ) ;
            
        case "Diamond": 
        return(
            <View>
                {props.counter !== "0" && 
                    <View style={styles.count}>
                        <Text style={{color: "white"}} children={props.counter}/>
                    </View>
                }
                <Diamond />
            </View>
            
        ) ;
            
        case "Hexagon": 
        return(
            <View>
                {props.counter !== "0" && 
                    <View style={styles.count}>
                        <Text style={{color: "white"}} children={props.counter}/>
                    </View>
                }
                <Hexagon />
            </View>
            
        ) ;
            
        case "HorizontalDiamond":
            return(
                <View>
                    {props.counter !== "0" && 
                        <View style={styles.count}>
                            <Text style={{color: "white"}} children={props.counter}/>
                        </View>
                    }
                    <HorizontalDiamond />
                </View>
                
            ) ;
            
        case "Pentagon": 
        return(
            <View>
                {props.counter !== "0" && 
                    <View style={styles.count}>
                        <Text style={{color: "white"}} children={props.counter}/>
                    </View>
                }
                <Pentagon />
            </View>
            
        ) ;
            
        case "Square": 
        return(
            <View>
                {props.counter !== "0" && 
                    <View style={styles.count}>
                        <Text style={{color: "white"}} children={props.counter}/>
                    </View>
                }
                <Square />
            </View>
            
        ) ;;
            
        case "Triangle": 
        return(
            <View>
                {props.counter !== "0" && 
                    <View style={styles.count}>
                        <Text style={{color: "white"}} children={props.counter}/>
                    </View>
                }
                <Triangle />
            </View>
            
        ) ;
            
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
    },
    count:{
        width: 22,
        height: 30,
        borderWidth: 2,
        borderColor: "white",
        backgroundColor: "#969696",
        borderRadius: 5,
        position: "absolute",
        zIndex: 2,
        top: 0,
        right: 10,
        alignItems: "center",
        justifyContent: "center",
    },
});