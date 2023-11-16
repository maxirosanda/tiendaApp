import {Pressable, StyleSheet, Text, View,Button} from "react-native"
import InputForm from "../components/InputForm"
import { useSignUpMutation } from "../app/features/Auth/authSlice"
import { useState } from "react"
import { useDispatch } from "react-redux"
import {setUser} from "../app/features/Auth/authSlice"
import { signupSchema } from "../validations/signupSchema"

const Sigup = ({navigation}) =>{
    const dispatch = useDispatch()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword]= useState("")
    const [signUp] = useSignUpMutation();
    const [errorEmail,setErrorEmail] = useState("")
    const [errorPassword,setErrorPassword] = useState("")
    const [errorConfirmPassword,setErrorConfirmPassword] = useState("")

    const onSubmit = async () => {

        try {
            const validation = signupSchema.validateSync({email,password,confirmPassword})
            const user = await signUp({
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
                case "confirmPassword":
                    setErrorConfirmPassword(err.message)
                    break
                default:
                    break
                
            }
        }
       
      }

    return <View style={styles.main}>
                <View style={styles.container}>
                    <Text style={styles.title}>Sigup</Text>
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
                       <InputForm
                        label={"confirm password"}
                        onChange={(text)=>{setConfirmPassword(text)}}
                        error = {errorConfirmPassword}
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