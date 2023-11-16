import {Pressable, StyleSheet, Text, View, Button} from "react-native"
import InputForm from "../components/InputForm"
const Login = ({navigation}) =>{

    const onSubmit = () => {

    }

    return <View style={styles.main}>
                <View style={styles.container}>
                    <Text style={styles.title}>Login to start</Text>
                    <InputForm
                        label={"email"}
                        onChange={()=>{}}
                        error = {""}
                    />
                       <InputForm
                        label={"password"}
                        onChange={()=>{}}
                        error = {""}
                        isSecure={true}
                    />
                    <Button
                        onPress={onSubmit}
                        title="Send"
                    />
                    <Text style={styles.sub}>Not have an account?</Text>
                    <Pressable onPress={()=>navigation.navigate("signup")}>
                        <Text style={styles.subLink}>Sign Up</Text>
                    </Pressable>
                </View>
           </View>
}

export default Login

    const styles = StyleSheet.create({
        main:{
            width:"100%",
            height:"100%",
            justifyContent:"center",
            alignItems:"center"
        },
        container:{
            width:"90%",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:"#f2f2f2",
            gap:15,
            paddingVertical:20,
            borderRadius:10

        },
        title:{
            fontSize:22
        },
        sub:{
            fontSize:14,
            color:"black"
        },
        subLink:{
            fontSize:14,
            color:"blue"
        }
    })