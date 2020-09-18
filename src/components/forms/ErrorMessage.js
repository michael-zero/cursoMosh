import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppText from '../AppText'
const ErrorMessage = ({error, visible}) => {

    if(!error || !visible) return null

    return <AppText style={styles.error}>{error}</AppText>
// { return error ? (<AppText style={styles.error}>{error}</AppText>) : null}
// }
}

export default ErrorMessage

const styles = StyleSheet.create({
    error: {
        color: 'red'
    }
})
