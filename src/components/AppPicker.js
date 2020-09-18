import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Switch, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../config/colors'
import defaultStyles from '../config/styles'
import AppText from './AppText'
import Screen from '../components/Screen'
import PickerItem from './PickerItem'

const AppPicker = ({width='100%', icon, items, numberOfColumns=1 ,onSelectItem ,placeholder, selectedItem, PickerItemComponent = PickerItem}) => {
    const [modalVisible, setModalVisible] = useState(false)

    return (
    <>
    
    <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        {/* //criou um container personalizado para o INPUT */}
        <View style={[styles.container, {width}]}> 
           {icon && <MaterialCommunityIcons 
           style={styles.icon}
           name={icon} size={20} color={defaultStyles.colors.medium}/>}
          
           {selectedItem ? <AppText style={styles.text}>{selectedItem.label}</AppText>: 
           <AppText style={styles.placeholder}>{placeholder}</AppText> }

           <MaterialCommunityIcons 
           name="chevron-down" size={20} color={defaultStyles.colors.medium}/>

        </View>
    </TouchableWithoutFeedback>

    <Modal  visible={modalVisible}  animationType='slide'>
        <Screen>
            <Button title='Close' onPress={() => setModalVisible(false)}/>
            <FlatList
            data={items}
            keyExtractor={item => item.value.toString()}
            numColumns={numberOfColumns}
            renderItem={({item}) => {
                return (
                    <PickerItemComponent
                    item={item}
                    onPress={() => {
                        setModalVisible(false)
                        onSelectItem(item)
                    }}
                    label={item.label}/>
                )
            }}
            />
        </Screen>
    </Modal>
    </>
    )
}

export default AppPicker

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
     },
     text: {
         flex: 1,
     },
     placeholder: {
         color: defaultStyles.colors.medium,
         flex: 1
     }
})
