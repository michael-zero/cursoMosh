
function minhaFuncao(v, w, x, y, z) { 
  console.log(v, w, x, y, z);
}
var args = [0, 1];
minhaFuncao(-1, ...args, 2, ...[3, 9]);
const p = {
  nome: 'zero', 
  idade: 22
}
console.log({...p});
console.log(p['nome']);
// import * as React from 'react';
// import { Text, View, StyleSheet, Button } from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const Stack = createStackNavigator();
// const Stack2 = createStackNavigator();
// const Tab = createBottomTabNavigator();


// const Home = ({navigation}) => {
//   return (
//     <View> 
//       <Text> Bem-vindo ao projeto Alfa</Text>
//       <Button title='ir sobre'
//        onPress={() => navigation.navigate('Contato')}
//       />
//     </View>
//   )
// }

// const Sobre = ({navigation}) => {
//   return (
//     <View> 
//       <Text> Sobre nós Alfa</Text>
//       <Button title='voltar' onPress={() => navigation.goBack()}/>
//     </View>
//   )
// }

// const Contato = ({navigation}) => {
//   return (
//     <View>
//       <Text>Área de contato</Text>
//       <Button title='Voltar inicio' onPress={() => navigation.goBack()}/>
//     </View>
//   )
// }




// const StackScreen = () => (
//   <Stack.Navigator> 
//     <Stack.Screen name='Home' component={Home}/>
//     <Stack.Screen name='Sobre' component={Sobre}/>
//   </Stack.Navigator>
// )

// const StackScreen2 = () => (
//   <Stack.Navigator> 
//     <Stack.Screen name='Contato' component={Contato}/>
//   </Stack.Navigator>
// )

// const PaiScreen = () => (
//   <Tab.Navigator>
//     <Tab.Screen name='Pai-Home' component={Home}/>
//     <Tab.Screen name='Contato' component={Contato}/>
//   </Tab.Navigator>
// )


// export default function App() {
//   return (
//    <NavigationContainer> 
//       <PaiScreen/>
//    </NavigationContainer>
//   );
// }


// //==========================================
// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View, SafeAreaView, Button, Alert, Platform} from 'react-native';
// import {Alerta, Orientacao, AlignItems, Wrap, Position} from './src/components/Coisas'
// import WelcomeScreen from './src/screens/WelcomeScreen'

// export default function App() {
  
//   return (
//     // <SafeAreaView style={styles.container}>
//     //   <Position/>
//     // </SafeAreaView>
    
//       <WelcomeScreen/>
    
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'orange',
//     paddingTop: Platform.OS === "android" ? "10%" : 0

//   },
// });
