import React from 'react';
import { View , Text, StyleSheet, Button, TextInput } from 'react-native';

import Card from '../components/card';

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}> Start A New Game!</Text>
                <Card style={styles.inputContainer}>
                <Text>Select A Number</Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title="Reset" onPress={() => {}} color/></View>
                    <View style={styles.button}><Button title="Confirm" onPress={() => {}}/></View>
                </View>
                </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    button: {
        width: 100,


    }

});

export default StartGameScreen