import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, SafeAreaView, Alert,FlatList } from 'react-native';
import styled from 'styled-components/native';
import IconButton  from '../components/IconButton'
import Memo from '../components/Memo';
import { images } from '../images';
import Constants from 'expo-constants';
import LogIn from './LogIn';

import { DarkTheme  } from '@react-navigation/native';

import { Button,Switch,ListItem,Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';


const More = ({navigation}) => {
    const BC = 0;
    const Lay1 = BC? 'powderblue': 'white', Lay2 = BC? 'skyblue':'white', Lay3= BC?'steelblue':'white';
    const [LockisEnabled, LocksetIsEnabled] = useState(false);
    const LockToggleSwitch = () => LocksetIsEnabled(previousState => !previousState);
    const [LocateisEnabled, LocatesetIsEnabled] = useState(false);
    const LocateToggleSwitch = () => LocatesetIsEnabled(previousState => !previousState);
    const [AlarmisEnabled, AlarmsetIsEnabled] = useState(false);
    const AlarmToggleSwitch = () => AlarmsetIsEnabled(previousState => !previousState);
    const [DarkisEnabled, DarksetIsEnabled] = useState(false);
    const DarkToggleSwitch = () => DarksetIsEnabled(previousState => !previousState);


    const [ modalVisible, setModalVisible ] = useState(false);
    const pressButton = () => {
        setModalVisible(true);
    }
      return(
        <Container style={styles.screen}>
            <View style={{flex: 1, backgroundColor: Lay1, flexDirection: 'column', alignItems: 'flex-start',justifyContent: 'space-between'}}>
                <Button
                    titleStyle={{
                        color: "red",
                        fontSize: 23,}}
                    onPressOut={()=>navigation.navigate('Home')}
                    type="clear"
                    icon={<Icon name="chevron-left" size={30} color="#4F4E4E"/>}
                    title="  옵션"/>
            </View>

            <View style={{flex: 9, backgroundColor: Lay2, flexDirection: 'column', alignItems: 'flex-start'}}>
            <ListItem>
                  <ListItem.Title>앱잠금</ListItem.Title>
                <Switch
                    trackColor={{ false: "#767377", true: "#81b0ff" }}
                    thumbColor={LockisEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={LockToggleSwitch}
                    value={LockisEnabled}  
                />
            </ListItem>
            <ListItem>
                  <ListItem.Title>위치설정</ListItem.Title>
                <Switch
                    trackColor={{ false: "#767377", true: "#81b0ff" }}
                    thumbColor={LocateisEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={LocateToggleSwitch}
                    value={LocateisEnabled}  
                />
            </ListItem>
            <ListItem>
                  <ListItem.Title>알림</ListItem.Title>
                <Switch
                    trackColor={{ false: "#767377", true: "#81b0ff" }}
                    thumbColor={AlarmisEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={AlarmToggleSwitch}
                    value={AlarmisEnabled}
                />
            </ListItem>
            <ListItem>
                  <ListItem.Title>다크모드</ListItem.Title>
                <Switch
                    trackColor={{ false: "#767377", true: "#81b0ff" }}
                    thumbColor={DarkisEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={DarkToggleSwitch}
                    value={DarkisEnabled}  
                />
            </ListItem>
            <Button
                titleStyle={{
                    color: "black",
                    fontSize: 18,
                    marginLeft: 4}} 
                type='clear'
                title='문의하기'
            />
            <Button
                titleStyle={{
                    color: "black",
                    fontSize: 18,
                    marginLeft: 4}} 
                type='clear'
                title='동기화'
            />            
            <Button
                titleStyle={{
                    color: "black",
                    fontSize: 18,
                    marginLeft: 4}} 
                type='clear'
                onPress={pressButton}
                title='로그인,로그아웃'
                />
            <LogIn
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            />
              
                
            
            <Button
                titleStyle={{
                    color: "black",
                    fontSize: 18,
                    marginLeft: 4}} 
                type='clear'
                title='백업'
            />        
            </View>
            <View style={{flex: 1, backgroundColor: Lay3, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginLeft:10}} >
               <Text>버전정보</Text>

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

export default More;