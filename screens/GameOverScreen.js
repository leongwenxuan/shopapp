import React from 'react'
import { View, Text, StyleSheet, Button, Image} from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import color  from '../constants/colors';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {
    return (
        <View style ={styles.screen}>
            <BodyText>The Game is Over!</BodyText>
            <View style={styles.imageContainer}>
            <Image fadeDuration={300}
            source={require('../assets/success.png')}
            //source={{uri: 'data:image/jpeg;base64,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'}}
            style={styles.image} resizeMode="cover"/>
            </View>
            <View style={styles.resultContainer}>
            <BodyText style={styles.resultText}>Your phone needed <Text style={styles.highlights}> {props.roundsNumber} </Text> rounds to guess the number <Text style={styles.highlights}>{props.userNumber}</Text></BodyText>
            </View>
            <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        margin: 30
    },    
    resultText: {
        textAlign: 'center',
        fontSize:   20
    },
    highlights: {
    color: color.primary,
    fontFamily: 'open-sans-bold'
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: 15
    },

});

export default GameOverScreen;