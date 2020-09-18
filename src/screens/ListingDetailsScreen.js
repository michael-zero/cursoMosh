import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import AppText from '../components/AppText'
import ListItem from '../components/ListItem'
import colors from '../config/colors'

const ListingDetailsScreen = () => {
    return (
        <View >
           <Image style={styles.image} source={require('../../assets/jacket.jpg')}/>

           <View style={styles.detailsContainer}>          
                 <AppText style={styles.title}>Red jacket for sell.</AppText>
                 <AppText style={styles.price}>$100</AppText>

                <View style={styles.userContainer}>
                    <ListItem
                        image={require('../../assets/mosh.jpg')}
                        title='Moshi Hamedani'
                        subtitle='5 Listings'
                    />
                </View>
            </View>
        </View>
    )
}

export default ListingDetailsScreen

const styles = StyleSheet.create({
    image:{
        width: '100%',
        height: 300
    },
    detailsContainer: {
        padding: 20,
    

    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    price: {
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 5
    },
    userContainer: {
        marginVertical: 35
    }
})
