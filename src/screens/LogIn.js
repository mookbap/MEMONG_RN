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
import AddFolderModal from '../components/AddFolderModal';

const LogIn = ({navigation}) => {
    const BC = 0;
    const Lay1 = BC? 'powderblue': 'white', Lay2 = BC? 'skyblue':'white', Lay3= BC?'steelblue':'white';
    const [ modalVisible, setModalVisible ] = useState(false);
    const pressButton = () => {
        setModalVisible(true);
    }
    const [open, setOpen] = React.useState(false);

    return(
        <Container>
            <View style={{flex: 1, backgroundColor: Lay1, flexDirection: 'column', alignItems: 'flex-start',justifyContent: 'space-between'}}>
            <Button
                    titleStyle={{
                        color: "red",
                        fontSize: 23,}}
                    onPressOut={()=>navigation.navigate('Home')}
                    type="clear"
                    icon={<Icon name="chevron-left" size={30} color="#4F4E4E"/>}
                    title="  로그인/로그아웃"/>
            </View>

            <View style={{flex: 11, backgroundColor: Lay2, flexDirection: 'column', alignItems: 'flex-start',justifyContent: 'fles-start'}}>

            </View>


        </Container>

    );
}
const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
`;
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

  export default LogIn;