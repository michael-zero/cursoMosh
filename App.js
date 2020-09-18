import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Image, Alert, Platform, Switch} from 'react-native';
import Screen from './src/components/Screen';
import Constants from 'expo-constants'
import ImageInputList from './src/components/ImageInputList'


export default function App() {
  const [imageUris, setImageUris] = React.useState([]);

  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri])
  }

  const handleRemove = uri => {
    setImageUris(imageUris.filter(imageUri => imageUri !== uri))
  }
 
  return (
      <Screen>
        <ImageInputList imageUris={imageUris} 
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
        />
      </Screen>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f4',
    paddingTop: Constants.statusBarHeight,
    justifyContent: 'center',
    alignItems: 'center'
    
  },
});
