import React from 'react';
import {StyleSheet, Text, View, Animated, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { Button,ListItem } from 'react-native-elements';


    class FloatingButtons extends React.Component {
    

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

        const { navigation } = this.props;



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



        return (
            
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={this.toggleMenu}>
                    <Animated.View style={[styles.button,styles.secondary,AddFolderStyle]}>
                        <Icon name="folder-plus" size={25} color="#F02A4B" />
                    </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('WriteMemo')}>
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


export default function FloatingButton (){
    const navigation = useNavigation() // extract navigation prop here 
    
    return <FloatingButtons navigation={navigation} /> //pass to your component.
    
      }

