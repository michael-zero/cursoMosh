import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import ImageInput from './ImageInput'

const ImageInputList = ({ imageUris = [], onRemoveImage, onAddImage}) => {
    return (
        <View style={styles.container}>
            {/* Renderiza as imagens, caso clique, delete! */}
            {imageUris.map(uri => (
            <View  key={uri} style={styles.image} >
                <ImageInput 
                imageUri={uri}
                onChangeImage={() => onRemoveImage(uri)}/>
            </View>
            ))}

            <ImageInput onChangeImage={(uri) => onAddImage(uri)}/>

        </View>
    )
}

export default ImageInputList

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    image: {
        marginRight: 10
    }
})
