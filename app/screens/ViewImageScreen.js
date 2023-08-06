import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'


import colors from '../config/colors'

function ViewImageScreen() {
  return (
    <View
        style={styles.container}
    >
        <View style={styles.closeIcon}>
            <MaterialCommunityIcons name='close' color={colors.white} size={30} />
        </View>

        <View style={styles.deleteIcon}>
            <MaterialCommunityIcons name='trash-can-outline' color={colors.white} size={30} />
        </View>

        <View/>
        
        <Image
            style={styles.image} 
            resizeMode='contain'
            source={require(`../assets/chair.jpg`)}
        />
    </View>
  )
}

const styles = StyleSheet.create({

    closeIcon: {
        position: 'absolute',
        top: 40,
        right: 30
    },

    container: {
        flex: 1,
        backgroundColor: colors.black
    },

    deleteIcon: {
        position: 'absolute',
        top: 40,
        left: 30
    },

    image:{
        width: '100%',
        height: '100%'
    }
})

export default ViewImageScreen