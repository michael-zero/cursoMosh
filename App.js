import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Image, Alert, Platform, Switch} from 'react-native';
import Screen from './src/components/Screen';
import Constants from 'expo-constants'
import ImageInput from './src/components/ImageInput'
import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker'

export default function App() {
  const [imageUri, setImageUri] = React.useState();

  const requestPermission = async () => {
     const {granted} = await ImagePicker.getCameraRollPermissionsAsync();
     
     if(!granted){
       alert('Você precisa dar permissão')
     }
  }

  React.useEffect(() => {
    requestPermission()
  }, [])

  return (
      <Screen>
        <ImageInput imageUri={imageUri} onChangeImage={uri => setImageUri(uri)}/>
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
