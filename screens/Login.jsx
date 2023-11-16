import {Pressable, StyleSheet, Text, View, Button} from "react-native"
import InputForm from "../components/InputForm"
import {useLoginMutation} from "../app/features/Auth/authSlice"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { setUser } from "../app/features/Auth/authSlice"
import { loginSchema } from "../validations/loginSchema"

const Login = ({navigation}) =>{
    const dispatch = useDispatch()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [login] = useLoginMutation()
    const [errorEmail,setErrorEmail] = useState("")
    const [errorPassword,setErrorPassword] = useState("")

    const onSubmit = async () => {
        try {
            const validation = loginSchema.validateSync({email,password})
            const user = await login({
                email,
                password,
              })
            dispatch(setUser({email:user.data.email,token:user.data.idToken}))
        } catch (err) {
            //console.log("Catch error")
            //console.log(err.path)
            //console.log(err.message)
            switch(err.path){
                case "email":
                    setErrorEmail(err.message)
                    break
                case "password":
                    setErrorPassword(err.message)
                    break
                default:
                    break
                
            }
        }
    }

    return <View style={styles.main}>
                <View style={styles.container}>
                    <Text style={styles.title}>Login to start</Text>
                    <InputForm
                        label={"email"}
                        onChange={(text)=>{setEmail(text)}}
                        error = {errorEmail}
                    />
                       <InputForm
                        label={"password"}
                        onChange={(text)=>{setPassword(text)}}
                        error = {errorPassword}
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