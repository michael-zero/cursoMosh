import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppTextInput from '../AppTextInput'
import ErrorMessage from './ErrorMessage'
import {useFormikContext} from 'formik'


const AppFormField = ({name, width, ...otherProps}) => {

    const {setFieldTouched, handleChange, errors, touched} = useFormikContext()

    return (
        <>
            <AppTextInput
            width={width}
            onBlur={() => setFieldTouched(name) }
            onChangeText={handleChange(name)} //refere-se ao nome no initialValues
            {...otherProps}
            />

            <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
        
    )
}

export default AppFormField

const styles = StyleSheet.create({})
