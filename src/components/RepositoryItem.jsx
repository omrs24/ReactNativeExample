import React from "react"
import { View, StyleSheet} from 'react-native'
import StyledText from "./StyledText.jsx"
import RepositoryStats from "./RepositoryStats.jsx"


const RepositoryItem = (props) => {

    return(
        <View key={props.id} style={styles.container }>
            <StyledText fontSize='subheading' fontWeight='bold'>{props.fullName}</StyledText>
            <StyledText color='secondary'>{props.description}</StyledText>
            <StyledText >{props.language}</StyledText>
            <RepositoryStats {...props} />
        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
        padding:20, 
        paddingBottom: 5, 
        paddingTop: 5
    }
})



export default RepositoryItem