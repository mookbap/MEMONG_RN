import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Button, SpeedDial,ListItem } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


export default function WriteMemo() {

    const [txt, selTxt] = useState('Hello world!')
    const navigation = useNavigation();


    return(
        <View style={{flex:1, backgroundColor:'#fc0'}}>
            <SafeAreaView style={{flex:1}}>
                <StatusBar style="auto" />
                    <View style={{padding:10, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                        <Button
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
                    <View style={{backgroundColor:'#eeeee', flex:1, padding:10}}>
                        <TextInput 
                            value={txt}
                            onChangeText={txt => selTxt(txt)}
                            multiline
                        />
                    </View>
            </SafeAreaView>
        </View>
    );


}