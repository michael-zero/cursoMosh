import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Formik} from 'formik'

const AppForm = ({initialValues, validationSchema, onSubmit, children}) => {
    return (
        <Formik 
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={onSubmit}
    > 
    {() => (
        <>
            {children}
        </>
    )}
    </Formik>
    )
}

export default AppForm

const styles = StyleSheet.create({})
