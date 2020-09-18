import React from 'react'
import { StyleSheet, View, ImageBackground,  Image, Text} from 'react-native'
import { AppButton } from '../components/Coisas'

const WelcomeScreen = (props) => {
    return (
      <ImageBackground 
      blurRadius={2}
      style={styles.background}
      source={require('../../assets/background.jpg')}>

          <View style={styles.logoContainer}>
            <Image source={require('../../assets/logo-red.png')}  style={styles.logo}/>
            <Text style={styles.tagLine}>Venda o que você não precisa.</Text>
          </View>
         
         <View style={styles.buttonsContainer}>
             <AppButton title='Login'/>
             <AppButton title='Register' color='secondary'/>
         </View>
      </ImageBackground>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    background: {
        flex: 1, 
        justifyContent: 'flex-end',
        alignItems: 'center'

    },
    buttonsContainer: {
        padding: 20,
        width: '100%'
    },
  
    logo: {
        width: 100,
        height: 100
    },
    logoContainer: {

        position: 'absolute',
        top: 50,
        alignItems: 'center'
    },
    tagLine: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingVertical: 17,
    }
})
