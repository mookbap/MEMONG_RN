import React from 'react';
import {
  TouchableWithoutFeedback,
  StyleSheet,
  Modal,
  View,
  Text,
  Pressable,
} from 'react-native';
import t from 'prop-types';

import { Button,ButtonGroup } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TextInput } from 'react-native-gesture-handler';


class AddFolderModal extends React.Component {
  static propTypes = {
    visible: t.bool.isRequired,
    dismiss: t.func.isRequired,
    transparent: t.bool,
    animationType: t.string,
  };

  static defaultProps = {
    animationType: 'none',
    transparent: true,
  };

  render() {
    const { props } = this;
    return (
      <View>
        <Modal
          visible={props.visible}
          transparent={props.transparent}
          onRequestClose={props.dismiss}
          animationType={props.animationType}
        >
          <TouchableWithoutFeedback onPress={props.dismiss}>
            <View style={styles.modalOverlay}>
				<View style={styles.modalContent}>
					<Text style={{ fontSize: 20,marginBottom:10 }}>폴더 이름을 입력해주세요!</Text>
					<TextInput 
					style={{borderWidth:1, padding:8, fontSize:20,height:50 , width:260, margin: 10}}
					placeholder="Enter a text..."/>
					<View style={styles.button}>
						<Button
							style={{
								borderStyle: 'solid',
								borderColor: 'blue',
								borderWidth: 5,
							}}
							titleStyle={{
								color: "black",
								fontSize: 20,
							}} 
							type='clear'
							title='확인'
						/>
						{/* <Button
							style={{
								padding: 10,
								borderStyle: 'solid',
								borderColor: 'blue',
								borderWidth: 5,
							}}
							titleStyle={{
								color: "black",
								fontSize: 20,
							}} 
							type='clear'
							title='취소'
						/> */}
					</View>
				</View>
			</View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  button:{
	backgroundColor: 'white',
	flexDirection: 'row',
	alignItems: 'stretch',
	justifyContent: 'space-between',
	paddingLeft: 20,
	paddingRight: 20
  },

  modalOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
	backgroundColor: 'rgba(0,0,0,0.1)',
	justifyContent: "center",
	alignItems: "center",
  },

  modalContent: {
	// backgroundColor: 'red',
    position: 'absolute',
	justifyContent: "center",
	alignItems: "center",
	padding: 10,
	borderStyle: 'solid',
	borderColor: 'black',
	borderWidth: 5,

  },

});


export default AddFolderModal;