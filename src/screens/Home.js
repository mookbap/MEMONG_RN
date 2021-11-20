import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import EventInput from '../components/EventInput';
import IconButton  from '../components/IconButton';
import Memo from '../components/Memo';
import { images } from '../images';
import Icon, { FA5Style } from 'react-native-vector-icons/FontAwesome5';
import { Button, SpeedDial,ListItem } from 'react-native-elements';
import BottomSheet from './BottomSheet';
import Constants from 'expo-constants';
// import FloatingButton from '../components/FloatingButton';
import AddFolderModal from '../components/AddFolderModal';
import WriteMemoModal from './WriteMemoModal';
import FloatingButtonFunc from '../components/FloatingButtonFunc';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlatList } from 'react-native-gesture-handler';
import Note from '../components/Note';

const Home = ({navigation}) => {
  const BC = 0;
  const Lay1 = BC? 'powderblue': 'white', Lay2 = BC? 'skyblue':'white', Lay3= BC?'steelblue':'white';

  const [ modalVisible, setModalVisible ] = useState(false);
  const pressButton = () => {setModalVisible(true)}; //bottomsheet modal control

  const [ memoModalVisible, setMemoModalVisible ] = useState(false);

  const controlMemoModalVisible = () => {
      setMemoModalVisible(true)
  };

  const [notes, setNotes] = useState([]);

 

  const findNotes = async () => {
    const result = await AsyncStorage.getItem('notes')
    console.log(result)
    if(result !== null) setNotes(JSON.parse(result));
    console.log("노트 새로고침 끝");
  };

  const handleOnSubmit = async (title,memo) => {
    const note = {id: Date.now(), title, memo, time: Date.now()};
    const updateNotes = [...notes,note];
    setNotes(updateNotes)
    await AsyncStorage.setItem('notes', JSON.stringify(updateNotes))
    console.log(note)
    console.log("업데이트 시작!")
  };

  useEffect(() => {
    console.log('홈화면 노트새로고침 시작 !')

    // AsyncStorage.clear(); //초기화

    findNotes();
  }, []);

  const openNote = (note) => {
    navigation.navigate('NoteDetail',{note})
  }
 
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

        <View style={{
            flex: 11,
            backgroundColor:'green',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            marginTop:5,
            zIndex:1,
            paddingHorizontal: 20,
        }}>

          <FlatList
            data={notes}
            numColumns={2}
            columnWrapperStyle={{justifyContent: 'space-between', marginBottom: 15,}}
            keyExtractor={item => item.id.toString()}
            renderItem = {({ item }) =>  <Note onPress={() => openNote(item)} item = {item} />}
          />

          {!notes.length ? (
            <View style={[
              StyleSheet.absoluteFillObject,
              styles.emptyHeaderContainer,
              ]}
            >
              <Text> Add Notes </Text>
            </View>
          ) : null }
          

        </View>


          {/* <Button
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
          /> */}


          <Button
              buttonStyle={{
                width: 150,   
                height : 150,
                padding: 10,                       
                margin: 15,                          
                borderRadius: 3,
              }}                  
              type="outline"
              onPress = {() => setMemoModalVisible(true)}
              title ="MemoModal"
            />
        <View style={{flex: 1, backgroundColor: Lay3, flexDirection: 'column',alignItems: 'center', justifyContent: 'space-between'}}>
        <FloatingButtonFunc
          visible={memoModalVisible} 
          onClose={()=> setMemoModalVisible(false)}
          onSubmit={handleOnSubmit}
        />

        <WriteMemoModal 
          visible={memoModalVisible} 
          onClose={()=> setMemoModalVisible(false)}
          onSubmit={handleOnSubmit}
        />

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