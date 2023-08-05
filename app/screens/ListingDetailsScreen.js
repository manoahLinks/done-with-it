import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import colors from '../config/colors'

function ListingDetailsScreen() {
  return (
    <View>
        <Image style={styles.image} source={require('../assets/jacket.jpeg')} />
        <View style={styles.detailsContainer}>
            <Text style={styles.title}>Red Jacket for sale</Text>
            <Text style={styles.price}>$100</Text>
        </View>     
    </View>
  )
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20,
        gap: 10
    },
    image: {
        width: '100%',
        height: 300
    },

    price: {
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 20
    },

    title:{
        fontSize: 24,
        fontWeight: '500'
    },
    
})

export default ListingDetailsScreen