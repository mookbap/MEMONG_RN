import React,{useState, Component} from 'react';
import { View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { ButtonGroup, Divider, Button, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';



    //버튼그룹 테스트

    const ViewSelector = () => {
      const [selectedIndex, setSelectedIndex] = useState(0);
      return(
        <ButtonGroup
        
        buttons={['보기방식1', '보기방식2']}
        selectedIndex={selectedIndex}
        onPress={(value) => {
            setSelectedIndex(value);
          }}
        containerStyle={{ marginBottom: 20 }}
    />
      );
  };




  export default ViewSelector;