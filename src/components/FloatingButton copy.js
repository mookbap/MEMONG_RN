import React from 'react';
import {Button, StyleSheet, Text, View, Animated, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation';


export default class FloatingButton extends React.Component {
    

    animation = new Animated.Value(0)
    
    toggleMenu = () => {
        const toValue = this.open ? 0 : 1;

        Animated.spring(this.animation, {
            toValue,
            friction: 5,
            useNativeDriver: true // Add This line
        }).start();

        this.open = !this.open;
    };


    render() {


        const AddMemoStyle = {
            transform: [
                {scale: this.animation},
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -80]
                    })
                }

            ]
        };


        const AddFolderStyle = {
            transform: [
                {scale: this.animation},
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -140]
                    })
                }

            ]
        };

        const rotation = {
            transform: [
                {
                    rotate: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: ["0deg", "45deg"]
                    })
                }
            ]
        };

        const { navigate } = this.props.navigation;

        

        return (
            <View style={styles.container}>

                <TouchableWithoutFeedback>
                    <Animated.View style={[styles.button,styles.secondary,AddFolderStyle]}>
                        <Icon name="folder-plus" size={25} color="#F02A4B" />
                    </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Menu')}>
                    <Animated.View style={[styles.button,styles.secondary,AddMemoStyle]}>
                        <Icon name="pencil-alt" size={25} color="#F02A4B" />
                    </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={this.toggleMenu}>
                    <Animated.View style={[styles.button, styles.menu,rotation]}>
                        <Icon name="plus" size={25} color="#FFF" />
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
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