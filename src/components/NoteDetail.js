import React, { useState,useEffect } from "react";
import {View, StyleSheet,Text, Modal,TextInput,SafeAreaView,TouchableWithoutFeedback,Keyboard} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { colors,Button } from "react-native-elements";
import Icon, { FA5Style } from 'react-native-vector-icons/FontAwesome5';
import styled from 'styled-components/native';
import { useNavigation } from "@react-navigation/core";
import AsyncStorage from '@react-native-async-storage/async-storage';

// import { Container } from './styles';

const NoteDetail = (props) => {
    const {note } = props.route.params
  return (
    <>
    <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Button
            //   onPress={handleSubmit}
              // onPressOut={()=>navigation.navigate('Home')}
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
              <Text>{note.memo}</Text>
          </View></>
  );
};

const styles = StyleSheet.create({
    container:{

    }
})

export default NoteDetail;