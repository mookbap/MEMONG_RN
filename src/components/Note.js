import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Note = ({item}) => {
    const {title,memo} = item;
    return (
        <View style={styles.container}>
            <Text>{title}</Text>
            <Text>{memo}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

    container : {
    }

})

export default Note
