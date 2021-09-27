import React,{useEffect, useRef} from 'react';
import {Button, StyleSheet, Text, View, Animated, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

function FloatingButtonFunc({navigation}) {
    const animation = useRef(new Animated.Value(0)).current;

    
     
    return (
        <View style={styles.container}>

            <TouchableWithoutFeedback>
                <Animated.View style={[styles.button,styles.secondary]}>
                    <Icon name="folder-plus" size={25} color="#F02A4B" />
                </Animated.View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={()=>navigation.navigate('More')}>
                <Animated.View style={[styles.button,styles.secondary]}>
                    <Icon name="pencil-alt" size={25} color="#F02A4B" />
                </Animated.View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
                <Animated.View style={[styles.button, styles.menu]}>
                    <Icon name="plus" size={25} color="#FFF" />
                </Animated.View>
            </TouchableWithoutFeedback>
        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        alignItems: 'center',
    },
    button: {
        position:"absolute",
        width: 60,
        height: 60,
        borderRadius: 60/2,
        alignItems: "center",
        justifyContent: "center",
        shadowRadius: 10,
        shadowColor: "#F02A4B",
        shadowOpacity: 0.3,
        shadowOffset: { height: 10 }
    },
    menu: {
        backgroundColor: "#F02A4B"
    },
    secondary: {
        width: 48,
        height: 48,
        borderRadius: 48/2,
        backgroundColor: "#FFF"
    }

});

export default FloatingButtonFunc;