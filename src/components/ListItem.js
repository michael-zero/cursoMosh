import React from 'react'
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import AppText from './AppText'
import colors from '../config/colors'

import {MaterialCommunityIcons} from '@expo/vector-icons'

const ListItem = ({image, title, subtitle, IconComponent ,onPress, renderRightActions}) => {
    return (
        //renderRightActions = view personalizada (ListItemDeleteAction)
<Swipeable renderRightActions={renderRightActions}>
    <TouchableHighlight 
        onPress={onPress}
        underlayColor={colors.lightgray}
    >
        <View style={styles.container}>
          {IconComponent}
          { image && <Image style={styles.image} source={image}/>}
           <View style={styles.detailsContainer}>
                <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                {subtitle && <AppText style={styles.subtitle} numberOfLines={2}>{subtitle}</AppText>}
           </View>
           <MaterialCommunityIcons color={colors.medium} name='chevron-right' size={25}/>
        </View>
    </TouchableHighlight>
</Swipeable>
    )
}

export default ListItem

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 15,
        backgroundColor: colors.white,
        paddingBottom: 10
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    title: {
        fontWeight: '400'
    },
    subtitle: {
        color: colors.medium,
        fontSize: 15
    },
    detailsContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center'
    }
})
