import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import colors from '../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ViewImageScreen = () => {
    return (
    <View style={styles.container}>
        <View style={styles.closeIcon}>
            <MaterialCommunityIcons name="close" size={24} color="white" />
        </View>

        <View style={styles.deleteIcon}>
             <MaterialCommunityIcons name="trash-can-outline" size={24} color="white" />
        </View>
        <Image 
        resizeMode='contain'
        style={styles.image}
        source={require('../../assets/chair.jpg')}/>
    </View>
    )
}

export default ViewImageScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        flex: 1
    },
    image: {
        width: "100%",
        height: "100%"
    },
    closeIcon: {
        position: 'absolute',
        top: 40,
        left: 30,
   
    },
    deleteIcon: {
        position: 'absolute',
        top: 40,
        right: 30,
    
    }
})
