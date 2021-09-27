import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import EventInput from '../components/EventInput';
import IconButton  from '../components/IconButton'
import Memo from '../components/Memo';
import { images } from '../images';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Button, SpeedDial,ListItem } from 'react-native-elements';
import BottomSheet from '../components/BottomSheet';
import Constants from 'expo-constants';
import FloatingButton from '../components/FloatingButton';
import FloatingButtonFunc from '../components/FloatingButtonFunc';

const Home = ({navigation}) => {
  const BC = 0;
  const Lay1 = BC? 'powderblue': 'white', Lay2 = BC? 'skyblue':'white', Lay3= BC?'steelblue':'white';
  const [ modalVisible, setModalVisible ] = useState(false);
  const pressButton = () => {
      setModalVisible(true);
  }
  const [open, setOpen] = React.useState(false);

  return (
    <Container style={styles.screen}>
        <View style={{flex: 1, backgroundColor: Lay1, flexDirection: 'row', justifyContent: 'space-between',alignItems:'center',marginRight: 10, marginLeft: 10}}>
          <Button
            type="clear" //clear
            onPressOut={()=>navigation.navigate('Menu')}
            icon={<Icon name="bars" size={25} color="#4F4E4E"/>}/>          
          <EventInput />
          <Button
            type="clear"
            onPress={pressButton}
            icon={<Icon name="filter" size={23} color="#4F4E4E"/>}/> 
          <BottomSheet
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
          />
          <Button
            type="clear"
            onPressOut={()=>navigation.navigate('More')}
            icon={<Icon name="ellipsis-v" size={23} color="#4F4E4E"/>}/>  
        </View>


        <View style={{flex: 11, backgroundColor: Lay2, flexDirection: 'row', alignItems: 'flex-start',justifyContent: 'space-between',marginTop:5}}>
          
          <Button
            buttonStyle={{
              width: 150,   
              height : 150,
              padding: 10,                       
              margin: 15,                          
              borderRadius: 3,
            }}                  
            type="outline"
            onPressOut={()=>navigation.navigate('WriteMemo')}
            title ="Memo"
          />  
          {/* <WriteMemo/> */}
          {/* <Memo title="memo1"></Memo> */}
        </View>
        <View style={{flex: 1, backgroundColor: Lay3, flexDirection: 'column',alignItems: 'center', justifyContent: 'space-between'}}>
        <FloatingButton/>
        </View>
    </Container> 
  );
}

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
`;
const textstyle = StyleSheet.create({
  title: {
    fontSize: 30,
    alignItems: 'center',
  },
});

const styles = StyleSheet.create({

  screen: {
    paddingTop: Constants.statusBarHeight // Constants의 statusBarHeight 값을 이용한다.
  },

  bottomNavigationView: {
    backgroundColor: '#fff',
    width: '100%',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  }
});


export default Home;