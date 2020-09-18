import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Switch } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../config/colors'
import defaultStyles from '../config/styles'

const AppTextInput = ({icon, width='100%', ...outrasProps}) => {
  

    return (
        //criou um container personalizado para o INPUT
        <View style={[styles.container, {width}]}> 
           {icon && <MaterialCommunityIcons 
           style={styles.icon}
           name={icon} size={20} color={defaultStyles.colors.medium}/>}
           <TextInput
           placeholderTextColor={defaultStyles.colors.medium}
           {...outrasProps}
           style={defaultStyles.text}/>
 

        </View>
    )
}

export default AppTextInput

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightgray,
        borderRadius: 25,
        flexDirection: 'row',
        padding: 15,
        marginVertical: 10,
    },
     icon: {
         marginRight: 10
     }
})
