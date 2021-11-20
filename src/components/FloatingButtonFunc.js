import React, { useRef,useState,useEffect } from "react";
import {StyleSheet, Text, View, Animated, TouchableWithoutFeedback,Alert,TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { Button,ListItem } from 'react-native-elements';
import AddFolderModal from './AddFolderModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import WriteMemoModal from "../screens/WriteMemoModal";
import Home,{setMemoModalVisible} from '../screens/Home'

const FloatingButtonFunc = ({controlMemoModalVisible}) => {

    // const [ modalVisible, setModalVisible ] = useState(false);

    // const pressButton = () => {
    //     setModalVisible(true);
    // };

    const navigation = useNavigation();


    const [open, setOpen] = useState(false); 

    

      const [ showModal, setShowModalVisible ] = useState(false);
      const hideModal = () => {
        setShowModalVisible(false)
      }   

    const animation = useRef(new Animated.Value(0)).current;


    const toggleMenu = () => {
        const toValue = open ? 0 : 1

        Animated.spring(animation, {
            toValue,
            friction: 5,
            useNativeDriver: true // Add This line
        }).start();
        
        if(open == true) {
            setOpen(false)
        } else {
            setOpen(true)
        };
    };


    const AddMemoStyle = {
        transform: [
            {scale: animation},
            {
                translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -80]
                })
            }

        ]
    };

    const AddFolderStyle = {
        transform: [
            {scale: animation},
            {
                translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -140]
                })
            }

        ]
    };

    const rotation = {
        transform: [
            {
                rotate: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0deg", "45deg"]
                })
            }
        ]
    };

    const controlWriteMemoModal = () => {
        console.log("메모켜기")
        controlMemoModalVisible(true)
    }

    // const [ memoModalVisible, setMemoModalVisible ] = useState(false);


    // const handleOnSubmit = async (title,memo) => {
    //     const note = {id: Date.now(), title, memo, time: Date.now()};
    //     const updateNotes = [...notes,note];
    //     setNotes(updateNotes)
    //     await AsyncStorage.setItem('notes', JSON.stringify(updateNotes))
    //     console.log(note)
    //     console.log("업데이트 시작!")
    //   };

    //   const handleSubmit = () => {
    //     if(!title.trim() && memo.trim()) return onClose();
    //     onSubmit(title,memo);
    //     setTitle('');
    //     setMemo('');
    //     onClose();
        
    // };
    

    //   const [notes, setNotes] = useState([]);

    //   const findNotes = async () => {
    //     const result = await AsyncStorage.getItem('notes')
    //     console.log(result)
    //     if(result !== null) setNotes(JSON.parse(result));
    //   };

    //   useEffect(() => {
    //     findNotes();
    //   }, [])


  return (
      
    <View style={styles.container}>
                {/* <WriteMemoModal 
                    visible={memoModalVisible} 
                    onClose={()=> setMemoModalVisible(false)}
                    onSubmit={handleOnSubmit}
                /> */}
        
        
                <TouchableWithoutFeedback 
                    onPress={()=>setShowModalVisible(true)}
                    onPressOut={toggleMenu}
                >
                    <Animated.View style={[styles.button,styles.secondary,AddFolderStyle]}>
                        <Icon name="folder-plus" size={25} color="#F02A4B" />
                        <AddFolderModal
                            visible={showModal}
                            dismiss={hideModal}
                        />
                    </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback 
                    onPress = {() => setMemoModalVisible(true)}
                    // onPress={()=>navigation.navigate('WriteMemoModal')}
                    onPressOut={toggleMenu}
                >
                    <Animated.View style={[styles.button,styles.secondary,AddMemoStyle]}>
                        <Icon name="pencil-alt" size={25} color="#F02A4B" />
                    </Animated.View>
                    </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={toggleMenu}>
                    <Animated.View style={[styles.button, styles.menu,rotation]}>
                        <Icon name="plus" size={25} color="#FFF" />
                    </Animated.View>
                </TouchableWithoutFeedback>
    </View>
  );
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
        alignItems: "center" ,
        justifyContent: "center",
        shadowRadius: 10,
        shadowColor: "#F02A4B",
        shadowOpacity: 0.3,
        shadowOffset: { height: 10 },
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