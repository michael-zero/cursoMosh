import React from 'react'
import { StyleSheet, Text, View, Button, Alert, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import {useDeviceOrientation} from '@react-native-community/hooks'
import colors from '../config/colors'

export const Alerta = () => {
   
    return (
        <View >
          <Text>Estudo do Alert.alert</Text>
          <Button title='click me' onPress={() => Alert.alert('Lorem ipsu', 'Mensagem lorem ipsum dolor amet', [
            {text: 'Sim', onPress: () => console.log('Yes')},
            {text: 'Não', onPress: () => console.log('No')}
          ])}/>
      </View>
    )
}

export const Orientacao = () => {
  const {landscape} = useDeviceOrientation();
  return (
  <View style={{backgroundColor: 'dodgerblue', width: "100%", height: landscape ? '100%' : '30%'}}/>)

}

export const AlignItems = () => {
  return (
    <>
    <View style={styles.caixa}>
      <View style={{height: 100, width: 60, backgroundColor: 'dodgerblue'}}/>
      <View style={{height: 70, width: 60, backgroundColor: 'gold'}}/>
      <View style={{height: 50, width: 60, backgroundColor: 'green'}}/>
      <Text>  AlignItems: Baseline</Text>
    </View>
    
    <View style={[styles.caixa, {alignItems: 'flex-start'}]}>
      <View style={{height: 100, width: 60, backgroundColor: 'red'}}/>
      <View style={{height: 70, width: 60, backgroundColor: 'gold'}}/>
      <View style={{height: 50, width: 60, backgroundColor: 'green'}}/>
      <Text>  AlignItems: FlexStart</Text>
    </View>
    <View style={[styles.caixa, {alignItems: 'stretch'}]}>
      <View style={{ width: 60, backgroundColor: 'brown'}}/>
      <View style={{height: 70, width: 60, backgroundColor: 'gold'}}/>
      <View style={{height: 50, width: 60, backgroundColor: 'green', alignSelf: 'flex-end'}}/>
      <Text>  AlignItems: Stretch </Text>
      
    </View>
    <Text>(sem altura no item 1) Estica e verde - alignSelf</Text>
    </>
  )
}

export const Wrap = () => (
  <View style={styles.caixaWrap}>
        <View style={{height: 60, width: 60, backgroundColor: 'red'}}/>
        <View style={{height: 60, backgroundColor: 'gold', flexBasis: 100}}/>
        <View style={{height: 60, width: 60, backgroundColor: 'green'}}/>
        <View style={{height: 60, width: 60, backgroundColor: 'grey'}}/>
        <View style={{height: 60, width: 60, backgroundColor: 'tomato'}}/>
        <View style={{height: 60, width: 60, backgroundColor: 'dodgerblue'}}/>
        <View style={{height: 60, width: 60, backgroundColor: 'cornsilk'}}/>
  </View>
)

export const Position = () => (
  <View style={styles.Pos}>
    <View style={{height: 60, width: 60, backgroundColor: 'red'}}/>
    <View style={{height: 60, width: 60, backgroundColor: 'gold', top: 20, left: 10}}/>
    <View style={{height: 60, width: 60, backgroundColor: 'green'}}/>
  
</View>
)

export const Shadow = () => (
  <View style={styles.sombra}> 
      <Text style={{ fontSize: 18,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: 'red',
        textDecorationLine: 'line-through',
        lineHeight: 35
     }}>Noob Saibot</Text>
  </View>

 
)

export const AppButton = ({title, onPress, color='primary'}) => (
<TouchableOpacity style={[styles.button, {backgroundColor: colors[color]}]} onPress={onPress}>
  <View>
    <Text style={styles.text}>{title}</Text>
  </View>
  </TouchableOpacity>
)


export default Alerta

const styles = StyleSheet.create({
  caixa: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 4
  },
  caixaWrap: {
    flex: 1,
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
    
  },

  Pos: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  sombra: {
    backgroundColor: "dodgerblue",
    width: 130,
    height: 130,
    //Props para IOS
    // shadowColor: "grey",
    // shadowOffset: {width: 20, height: 20},
    // shadowOpacity: 1,
    elevation: 40,

    justifyContent: 'center',
    alignItems: 'center'
    
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    marginVertical: 10,
    width: '100%'
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: 'uppercase'
  }
})
