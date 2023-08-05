import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import colors from '../config/colors'

function Card({title, subTitle, image}) {
  return (
    <View style={styles.Card}>
        <Image style={styles.image} source={image}/>
        <View style={styles.detailsContainer}>
            <Text>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
        </View>   
    </View>
  )
}

const styles = StyleSheet.create({
    Card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: 'hidden'
    },

    detailsContainer:{
        padding: 20,
        gap: 5
    },

    image: {
        width: '100%',
        height: 200
    },
   
    subTitle: {
        color: colors.secondary,
        fontWeight: 'bold'
    }
})

export default Card