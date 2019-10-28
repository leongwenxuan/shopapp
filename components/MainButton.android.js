import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity, TouchableNativeFeedback, Platform } from "react-native";
import Color from '../constants/colors'
import colors from '../constants/colors';

const MainButton = props => {

    let ButtonComponent = TouchableOpacity;

    if ( Platform.Version >= 21) {
        ButtonComponent = TouchableNativeFeedback;
    }
    return (
    <View style={styles.buttonContainer}>
    <ButtonComponent onPress={props.onPress }>
        <View style={styles.button}>
            <Text style={styles.MainButton}>{props.children}</Text>
        </View>
    </ButtonComponent>
    </View>
    );
};


const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius:25
    },
    buttonContainer: {
        borderRadius: 25,
        overflow: 'hidden'
    },
    buttonText: {
        color: 'white',
        fontFamily: 'open-sans',
        fontSize:18
    }
});

export default MainButton