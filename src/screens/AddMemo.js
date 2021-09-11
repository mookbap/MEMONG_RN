import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import styled from 'styled-components/native';
import Button from '../components/Button';
import IconButton  from '../components/IconButton'
import Memo from '../components/Memo';
import { images } from '../images';



const AddMemo = () => {
    const BC = 0;
    const Lay1 = BC? 'powderblue': 'white', Lay2 = BC? 'skyblue':'white', Lay3= BC?'steelblue':'white';
    return(
        <Container>
            <View style={{flex: 9, backgroundColor: Lay1, flexDirection: 'row', alignItems: 'flex-start',justifyContent: 'space-between'}} />
            <View style={{flex: 1, backgroundColor: Lay2, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}} >
                <Button title="폴더추가   "/>
            </View>
            <View style={{flex: 1, backgroundColor: Lay3, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}} >
                <Button title="메모추가   "/>
            </View>
           
        </Container>  
    );
};



const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
`;

export default AddMemo;