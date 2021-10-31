import React,{useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Button, SpeedDial,ListItem } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function WriteMemo() {

    const [txt, setTxt] = useState('Hello world!')
    const navigation = useNavigation();

    useEffect(()=> {
        console.log('시작!')
        loadData(); //이 스크린 시작할때 실행시킴
    },[]);


    const saveData = async (value) => {
        try {
          await AsyncStorage.setItem('memong', value)
          console.log('저장완료')
        } catch (e) {
          // saving error
        }
      }

    
    const loadData = async () => {
        try {
        const value = await AsyncStorage.getItem('memong')
        if(value !== null) {
            setTxt(value);
            console.log('불러오기 완료')

            // value previously stored
        }
        } catch(e) {
        // error reading value
        }
    }


    return(
        <View style={{flex:1, backgroundColor:'#fc0'}}>
            <SafeAreaView style={{flex:1}}>
                <StatusBar style="auto" />
                    <View style={{padding:10, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                        <Button
                            onPress={()=>saveData(txt)}
                            titleStyle={{
                                color: "red",
                                fontSize: 23,}}
                            onPressOut={()=>navigation.navigate('Home')}
                            type="clear"
                            icon={<Icon name="chevron-left" size={30} color="#4F4E4E"/>}
                            title="  메모제목"/> 

                        <Button
                            type="clear"
                            onPressOut={()=>navigation.navigate('MemoOption')}
                            icon={<Icon name="ellipsis-v" size={23} color="#4F4E4E"/>}
                        />                          
                    </View>
                    <View style={{backgroundColor:'#eeeeee', flex:1, padding:10}}>
                        <TextInput 
                            value={txt}
                            onChangeText={txt => setTxt(txt)}
                            multiline
                        />
                    </View>
            </SafeAreaView>
        </View>
    );


}