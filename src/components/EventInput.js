import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

const EventInput = () => {
    const[text, setText] = useState('');
    const _onChange = event => setText(event.nativeEvent.text);
    
    return(
        <View>
            <TextInput 
                style={{borderWidth:1, padding:8, fontSize:20, width:260}}
                placeholder="Enter a text..."
                onChange={_onChange}
            />
        </View>
    );
};

export default EventInput;