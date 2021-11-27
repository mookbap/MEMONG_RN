import React, { useState,useEffect } from "react";
import {ScrollView,View, StyleSheet,Text, Modal,TextInput,SafeAreaView,TouchableWithoutFeedback,Keyboard} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { colors,Button } from "react-native-elements";
import Icon, { FA5Style } from 'react-native-vector-icons/FontAwesome5';
import styled from 'styled-components/native';
import { useNavigation } from "@react-navigation/core";
import AsyncStorage from '@react-native-async-storage/async-storage';

// import { Container } from './styles';

const NoteDetail = (props) => {
    const {note } = props.route.params
    const navigation = useNavigation();

    const formatDate = ms => {
        const date = new Date(ms);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const hrs = date.getHours();
        const min = date.getMinutes();
        const sec = date.getSeconds();

        console.log(year)

        return 'created At  '+day+'/'+month+'/'+year +'  '+date.toLocaleTimeString();
        // return 'created At  '+day+'/'+month+'/'+year +'  '+ hrs+':'+min+':'+sec;
};

  return (
    <>
        <SafeAreaView style={{flex:1, piadding:10,}}>
            <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Button
                    //   onPress={handleSubmit}
                    onPress={()=>navigation.navigate('Home')}
                    type="clear"
                    icon={<Icon name="chevron-left" size={30} color="#4F4E4E" />} />

                <TextInput
                    value={note.title}
                    placeholder='Title' style={[styles.input, styles.title]}
                    onChangeText={(text) => handleOnChangeText(text, 'title')} />

                <Button
                    type="clear"
                    icon={<Icon name="ellipsis-v" size={23} color="#4F4E4E" />} />
            </View>
            <View style={styles.container}>
                {/* <Text>{note.title}</Text> */}
                <Text style={styles.time}>{formatDate(note.time)}</Text>
                <TextInput multiline>{note.memo}</TextInput>
            </View>
        </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
    container:{
        padding: 10,

    },
    time: {
        textAlign: 'right',
        fontSize: 12,
        opacity: 0.5,
    }
})

export default NoteDetail;