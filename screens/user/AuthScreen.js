import { StyleSheet,View,Text,KeyboardAvoidingView } from "react-native";

const AuthScreen = () => {

    return <KeyboardAvoidingView
                behavior="padding"
                keyboardVerticalOffset={50}
                style={styles.screen}
           >
            <View>
                <Text>Auth Screen</Text>
            </View>
           </KeyboardAvoidingView>
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    title:{
        fontSize:24,
        marginBottom:18
    },
    container:{
        width:"80%",
        maxWidth:400,
        height:"50%",
        maxHeight:400,
        padding:12
    },
    footer:{
        marginTop:24
    },
    button:{
        marginBottom:8
    }
})

export default AuthScreen