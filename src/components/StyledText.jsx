import React from "react"
import { Text, StyleSheet } from "react-native"
import theme from '../theme.js'

// Defining our main styles
const styles = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal
    },
    colorPrimary: {
        color: theme.colors.textPrimary
    },
    colorSecondary: {
        color: theme.colors.textSecondary
    },
    bold: {
        fontWeight: theme.fontWeights.bold
    },
    subHeading: {
        fontSize: theme.fontSizes.subHeading
    },
    textAlignCenter:{
        textAlign: 'center'
    }
})

// This is a function that receives optional parameters
export default function StyledText({ children, align, color, fontSize, fontWeight, style, ...restOfProps}) {

    const textStyles = [
        styles.text,
        align === 'center' && styles.textAlignCenter,
        color === 'primary' && styles.colorPrimary,
        color === 'secondary' && styles.colorSecondary,
        fontSize === 'subheading' && styles.subHeading,
        fontWeight === 'bold' && styles.bold,
    ]

    return (
        <Text style={textStyles}>
            {children}
        </Text>
    )
}