// import React,{Component} from "react";
// import { render } from "react-dom";
// import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
// import { Button } from 'react-native-elements';





// class AnimatedSwitch extends React.Component {
//     state = {
//         active: true
//     }

//     handleSwitchToggle = () => {
//         this.setState({
//             active : !this.state.active
//         });
//     }

//     render() {
//         const styles = StyleSheet.create({
//             container:{
//                 height: 60,
//                 width: 250,
//                 backgroundColor: '#C7C1C1'
//             },
//             toggle: {
//                 height: 60,
//                 width: 125,
//                 backgroundColor: '#55aace',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 left: this.state.active ? 125 : 0
            
//             },
//             label: {
//                 fontSize: 22,
//                 color: '#FFF'
//             }
//         });
//         return(
//             <View style={styles.container}>
//                 <TouchableOpacity
//                 onPress={this.handleSwitchToggle}
//                 style={styles.toggle}>
//                     <Text style={styles.label}>
//                         {this.state.active ? 'Activo' : 'Inactivo'}
//                     </Text>
//                 </TouchableOpacity>
//             </View>
//         );
//     }
// }

// export default AnimatedSwitch;