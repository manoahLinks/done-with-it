import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import colors from '../config/colors'
import ListItem from '../components/ListItem'

function ListingDetailsScreen() {
  return (
    <View>
        <Image style={styles.image} source={require('../assets/jacket.jpeg')} />
        <View style={styles.detailsContainer}>
            <Text style={styles.title}>Red Jacket for sale</Text>
            <Text style={styles.price}>$100</Text>
            <View style={styles.userContainer}>
                <ListItem
                    image={require('../assets/jacket.jpeg')}
                    title= "Travis Scott"
                    subTitle= '5 Listing'

                />
            </View>  
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

    userContainer: {
        marginVertical: 40,
    }
    
})

export default ListingDetailsScreen