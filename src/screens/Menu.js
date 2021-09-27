

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Alert } from 'react-native';
import styled from 'styled-components/native';
// import Button from '../components/Button';
import IconButton  from '../components/IconButton'
import Memo from '../components/Memo';
import { images } from '../images';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Home from './Home'
import Constants from 'expo-constants';


const Menu = ({navigation}) => {
    const BC = 0;
    const Lay1 = BC? 'powderblue': 'white', Lay2 = BC? 'skyblue':'white', Lay3= BC?'steelblue':'white';
    return(
        <Container style={styles.screen}>
            <View style={{flex: 1, backgroundColor: Lay2, flexDirection: 'column', alignItems: 'flex-start',justifyContent: 'space-between'}}>
                <Button
                    titleStyle={{
                        color: "red",
                        fontSize: 23,}}
                    onPressOut={()=>navigation.navigate('Home')}
                    type="clear"
                    icon={<Icon name="chevron-left" size={30} color="#4F4E4E"/>}
                    title="  메뉴"/> 
                
            </View>        
            
            <View style={{flex: 11, backgroundColor: Lay2, flexDirection: 'column', alignItems: 'flex-start',justifyContent: 'fles-start'}}>
                <Button
                    titleStyle={{
                        color: "red",
                        fontSize: 23,}}
                    // onPressOut={()=>navigation.navigate('휴지통스크린')}
                    type="clear"
                    icon={<Icon name="folder" size={30} color="#4F4E4E"/>}
                    title="  폴더"/>

                <Button
                    titleStyle={{
                        color: "red",
                        fontSize: 23,}}
                    // onPressOut={()=>navigation.navigate('휴지통스크린')}
                    type="clear"
                    icon={<Icon name="folder" size={30} color="#4F4E4E"/>}
                    title="  폴더2"/> 

                <Button
                    titleStyle={{
                        color: "red",
                        fontSize: 23,}}
                    // onPressOut={()=>navigation.navigate('휴지통스크린')}
                    type="clear"
                    icon={<Icon name="folder-plus" size={30} color="#4F4E4E"/>}
                    title="  폴더추가"/>
                <Button
                    titleStyle={{
                        color: "red",
                        fontSize: 23,}}
                    // onPressOut={()=>navigation.navigate('휴지통스크린')}
                    type="clear"
                    icon={<Icon name="slideshare" size={30} color="#4F4E4E"/>}
                    title="  공유메모"/>
                    
                
            </View>
            <View style={{flex: 1, backgroundColor: Lay3, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}} >
                 <Button
                    onPressOut={()=>navigation.navigate('Trash')}
                    type="clear"
                    icon={<Icon name="trash-alt" size={40} color="#4F4E4E"/>}
                    title=" 휴지통   "/> 
            </View>

        </Container>
    );
};

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
`;

const styles = StyleSheet.create({

    screen: {
      paddingTop: Constants.statusBarHeight // Constants의 statusBarHeight 값을 이용한다.
    }
  });

export default Menu;