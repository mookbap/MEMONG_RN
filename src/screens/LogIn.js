

import React, { useEffect, useRef, useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Modal,
    Animated,
    TouchableWithoutFeedback,
    Dimensions,
    PanResponder
} from 'react-native';
import { Button,ButtonGroup } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ViewSelector from '../components/ViewSelector';
import IconButton from '../components/IconButton';
import { images } from '../images';

const LogInCopy = (props) => {
    const { modalVisible, setModalVisible } = props;
    const screenHeight = Dimensions.get("screen").height;
    const panY = useRef(new Animated.Value(screenHeight)).current;
    const translateY = panY.interpolate({
        inputRange: [-1, 0, 1],
        outputRange: [0, 0, 1],
    });

    const resetBottomSheet = Animated.timing(panY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
    });

    const closeBottomSheet = Animated.timing(panY, {
        toValue: screenHeight,
        duration: 300,
        useNativeDriver: true,
    });


    const panResponders = useRef(PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => false,
        onPanResponderMove: (event, gestureState) => {
            panY.setValue(gestureState.dy);
        },
        onPanResponderRelease: (event, gestureState) => {
            if(gestureState.dy > 0 && gestureState.vy > 1.5) {
                closeModal();
            }
            else {
                resetBottomSheet.start();
            }
        }
    })).current;

    useEffect(()=>{
        if(props.modalVisible) {
            resetBottomSheet.start();
        }
    }, [props.modalVisible]);

    const closeModal = () => {
        closeBottomSheet.start(()=>{
            setModalVisible(false);
        })
    }

    return (
        <Modal
            visible={modalVisible}
            animationType={"fade"}
            transparent
            statusBarTranslucent
        >
            <View style={styles.overlay}>
                
                    
                <TouchableWithoutFeedback
                    onPress={closeModal}
                >
                    <View style={styles.background}/>
                </TouchableWithoutFeedback>

                
                <Animated.View
                    style={{...styles.icon, transform: [{ translateY: translateY }]}}
                    {...panResponders.panHandlers}>
                    
                    <View style={{flex: 2, justifyContent: 'center',alignItems:'start',marginRight: 10, marginLeft: 10}}>
                     <Text style={{fontSize:20}}> 다음으로 로그인 </Text>

                    </View>
                    <View style={{flex: 4,  flexDirection: 'row', justifyContent: 'space-evenly',alignItems:'center',marginRight: 10, marginLeft: 10}}>
                        <IconButton type={images.kakao}/>
                        <IconButton type={images.facebook}/>
                        <Button
                        type="clear"
                        icon={<Icon name="apple" size={50} color="#4F4E4E"/>}/>    

                    </View>
                    
                </Animated.View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0, 0, 0, 0.4)"
    },
    background: {
        flex: 1,
    },
    bottomSheetContainer: {
        height: 300,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    icon: {
        height: 200,
        backgroundColor: "white",
      //  flexDirection: 'row', 
       // alignItems: 'center',
        //justifyContent: 'space-evenly',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    }
})

export default LogInCopy;