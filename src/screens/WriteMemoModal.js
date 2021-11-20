import React, { useState,useEffect } from "react";
import {View, StyleSheet,Text, Modal,TextInput,SafeAreaView,TouchableWithoutFeedback,Keyboard} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { colors,Button } from "react-native-elements";
import Icon, { FA5Style } from 'react-native-vector-icons/FontAwesome5';
import styled from 'styled-components/native';
import { useNavigation } from "@react-navigation/core";
import AsyncStorage from '@react-native-async-storage/async-storage';

const WriteMemoModal = ({visible,onClose,onSubmit}) => {
    const navigation = useNavigation();


    const [title, setTitle] = useState('');
    const [memo,setMemo] = useState('');
    const handleModalClose = () =>{
        Keyboard.dismiss();
    };

    const handleOnChangeText = (text, valueFor) => {
        if(valueFor === 'title') setTitle(text);
        if(valueFor === 'memo') setMemo(text);
    };

    const handleSubmit = () => {
      if(!title.trim() && memo.trim()) return onClose();
      onSubmit(title,memo);
      setTitle('');
      setMemo('');
      onClose();
      
  };
    return (
        <>
                <StatusBar style='auto' />
                <Modal visible={visible} animationType='fade'>
                    <SafeAreaView style={{flex:1}}>
                    <View style={{padding:10, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                        <Button
                            onPress={handleSubmit}
                            // onPressOut={()=>navigation.navigate('Home')}
                            type="clear"
                            icon={<Icon name="chevron-left" size={30} color="#4F4E4E"/>}
                        /> 

                        <TextInput 
                            value={title}
                            placeholder='Title' style={[styles.input, styles.title]}
                            onChangeText={(text) => handleOnChangeText(text,'title')} 
                        />

                        <Button
                            type="clear"
                            icon={<Icon name="ellipsis-v" size={23} color="#4F4E4E"/>}
                        />                          
                    </View>

                    <View style={styles.container}>
                        
                        
                        <TextInput 
                            value={memo}
                            multiline 
                            placeholder='Memo' 
                            style={[styles.input, styles.desc]}
                            onChangeText={(text) => handleOnChangeText(text,'memo')} 
                        />
                    </View>

                    <TouchableWithoutFeedback onPress={handleModalClose}>
                                <View>

                                </View>
                    </TouchableWithoutFeedback>

                    </SafeAreaView>
                </Modal>
        </>
    );
};

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
`;


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },

    input: {
        borderBottomWidth:2 ,
        borderBottomColor: 'black',
        fontSize: 20,
        height: '100%',
    },

    title: {
        width: '70%',
        height: 40,
        fontWeight: 'bold',
    },

    desc: {
        height: '100%',
    }
});

export default WriteMemoModal;
