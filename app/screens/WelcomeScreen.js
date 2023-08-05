import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native'

function WelcomeScreen() {
  return (
    <ImageBackground
        source={require('../assets/background.jpg')}
        resizeMode='cover'
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center'
        }}
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
          <Text>sell what you dont need</Text>
        </View>
        <View
          style={{
            width: '100%',
            height: 70,
            backgroundColor: '#fc5c65'
          }}
        />

        <View
          style={{
            width: '100%',
            height: 70,
            backgroundColor: '#4ecdc4'
          }}
        />
      </ImageBackground>
  )
}

export default WelcomeScreen;