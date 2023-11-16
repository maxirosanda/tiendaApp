import {Pressable, StyleSheet, Text, View,Button} from "react-native"
import InputForm from "../components/InputForm"
import { useSignUpMutation } from "../app/features/auth/authSlice"
import { useState } from "react"

const Sigup = ({navigation}) =>{

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword]= useState("")
    const [signUp] = useSignUpMutation();

    const onSubmit =() => {
        signUp({
            email,
            password,
          })
      }

    return <View style={styles.main}>
                <View style={styles.container}>
                    <Text style={styles.title}>Sigup</Text>
                    <InputForm
                        label={"email"}
                        onChange={(text)=>{setEmail(text)}}
                        error = {""}
                    />
                       <InputForm
                        label={"password"}
                        onChange={(text)=>{setPassword(text)}}
                        error = {""}
                        isSecure={true}
                    />
                       <InputForm
                        label={"confirm password"}
                        onChange={(text)=>{setConfirmPassword(text)}}
                        error = {""}
                        isSecure={true}
                    />
                    <Button
                        onPress={onSubmit}
                        title="Send"
                    />
                    <Text style={styles.sub}>Not have an account?</Text>
                    <Pressable onPress={()=>navigation.navigate("login")}>
                        <Text style={styles.subLink}>Login</Text>
                    </Pressable>
                </View>
           </View>
}

export default Sigup

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