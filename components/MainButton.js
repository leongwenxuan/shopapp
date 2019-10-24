import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from "react-native";
import Color from '../constants/colors'
import colors from '../constants/colors';

const MainButton = props => {
    return <TouchableOpacity onPress={props.onPress }>
        <View style={styles.button}>
            <Text style={styles.MainButton}>{props.children}</Text>
        </View>
    </TouchableOpacity>
};


const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius:25
    },
    buttonText: {
        color: 'white',
        fontFamily: 'open-sans',
        fontSize:18
    }
});

export default MainButton