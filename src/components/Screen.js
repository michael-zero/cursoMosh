import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import Constants from 'expo-constants'
import colors from '../config/colors'

const Screen = ({children, style, }) => {
    return (
       <SafeAreaView style={[styles.screen, style]}>
           <View style={[style, styles.view]}>{children}</View>
       </SafeAreaView>
    )
}

export default Screen

const styles = StyleSheet.create({
    screen: {
        // paddingLeft: 50,
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    },
    view: {
        flex: 1
    }
})
