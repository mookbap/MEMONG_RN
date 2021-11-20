import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';

const Note = ({item,onPress}) => {
    const {title,memo} = item;
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.title} numberOfLines={1}>{title}</Text>
            <Text numberOfLines={3}>{memo}</Text>
        </TouchableOpacity>
    );
};
const width = Dimensions.get('window').width - 40


const styles = StyleSheet.create({

    container : {
        backgroundColor: 'yellow',
        width: width / 2 - 10,
        padding: 8,
        borderRadius: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'red'
    }

})

export default Note
