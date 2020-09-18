import { Platform } from 'react-native'
import colors from './colors'

export default {
    colors,
    text: {
        fontSize: 16,
        color: colors.dark,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    }
}