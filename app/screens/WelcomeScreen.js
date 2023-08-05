import React from 'react';
import { Image, ImageBackground, Text, View, StyleSheet } from 'react-native'
import AppButton from '../components/AppButton';
import App from '../../App';

function WelcomeScreen() {
  return (
    <ImageBackground
        source={require('../assets/background.jpg')}
        resizeMode='cover'
        style={styles.background}
        blurRadius={5}
      >
        <View
          style={{
            position: 'absolute',
            top: 70,
            alignItems: 'center'
          }}
        >
          <Image
            source={require('../assets/logo-red.png')}
            style={{
              width: 100,
              height: 100,
            }}
          />
          <Text style={styles.tagline}>sell what you dont need</Text>
        </View>
        <View style={styles.buttonContainer}>
          <AppButton title={'login'} />
          <AppButton title={'Register'} color='secondary' />
        </View>
      </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },

  buttonContainer: {
    padding: 20,
    width: '100%'
  },

  tagline: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20
  }
})

export default WelcomeScreen;