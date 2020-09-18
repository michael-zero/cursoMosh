import React from 'react'
import { StyleSheet, Text, View, Image} from 'react-native'
import Screen from '../components/Screen'


import * as Yup from 'yup'

import {AppForm, AppFormField, SubmitButton} from '../components/forms'



const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})

const LoginScreen = () => {
    return (
       <Screen style={styles.container}>
           <Image 
           style={styles.logo}
           source={require('../../assets/logo-red.png')}/>


            <AppForm 
                validationSchema={validationSchema}
                initialValues={{email: '', password: ''}}
                onSubmit={values => console.log(values)}
            >

                <AppFormField
                        name='email'
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyBoardType='email-address'
                        icon='email'
                        placeholder='Email'
                    />
                            
                        <AppFormField
                        name='password'
                        autoCapitalize='none'
                        autoCorrect={false}
                        icon='lock'
                        placeholder='Password'
                        secureTextEntry
                    />

                    <SubmitButton title='Login'/>


            </AppForm>

          
       </Screen>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo:{
        alignSelf: 'center',
        width: 80,
        height: 80,
        marginTop: 50,
        marginBottom: 20
    }
})
