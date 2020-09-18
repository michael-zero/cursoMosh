import React from 'react'
import { Image, StyleSheet, Alert, TouchableWithoutFeedback, View } from 'react-native'
import colors from '../config/colors'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'

const ImageInput = ({imageUri, onChangeImage}) => {

    const handlePress = () => {
        if(!imageUri) selectImage()
        else Alert.alert('Delete', 'Tem certeza que deseja deletar esta imagem?', [
            {text: 'Sim', onPress: () => onChangeImage(null)},
            {text: 'Não'}
        ])
    }

    const selectImage = async () => {
        try {
            //carrega a imagem da biblioteca e passa os requisitos da imagem
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5, 
            })

            if(!result.cancelled){
             onChangeImage(result.uri)
            }
        } catch (error) {
            console.log('erro ao ler a imagem ',error);
        }
    }

    return (
    <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.container}>
            {!imageUri && <MaterialCommunityIcons color={colors.medium} name='camera' size={40}/>}
            {imageUri && <Image style={styles.image} source={{uri: imageUri}}/>}
        </View>
    </TouchableWithoutFeedback>
    )
}

export default ImageInput

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.lightgray,
        borderRadius: 15,
        justifyContent: 'center',
        height: 100,
        width: 100,
        overflow: 'hidden'
        
    },

    image: {
        width: 100,
        height: 100,
    }
})
