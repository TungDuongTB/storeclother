import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TextInput from "../../../Component/textInput";
import colors from "../../../Component/colors";
import { createUser } from "../../../callApi/userApi";
import  { validateEmail, validatePassword } from "../../../Component/validate";

const SignupScreen = ()=>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [rpassword,setRPassword] = useState('');
    const [status,setStatus] = useState(false);
    const SignUp = async()=>{
       try {
        // if(!validateEmail(email)&&!validatePassword(password)){
        //     setStatus(true)        
        // }else if(!validateEmail(email)){
        //     setStatus(true)
        // }else if(!validatePassword(password)){
        //     setStatus(true)
        // }else{
        //     setStatus(false)
        // }
        const user = await createUser(email, password);
        
        console.log(user);
       } catch (error) {
            console.log(error);
       }
    }
    return(
        <View style={styles.container}>
            <Text style={styles.textHeader}>Sign Up</Text>
            <TextInput title={'e-mail'} type={true} onChangeText={setEmail} errorMesses={status}/>
            <TextInput title={'password'} type={true} onChangeText={setPassword} errorMesses={status}/>
            <TextInput title={'repeat password'} type={true} onChangeText={setRPassword} errorMesses={status}/>
            <Text style={{alignSelf:'center',marginTop:'15%'}}>Sign up with social account</Text>
        
            <View style={{flexDirection:'row',justifyContent:'center'}}>
                <SocialButton  image={require('../../../image/phone.png')}/>
                <SocialButton  image={require('../../../image/google.png')}/>
                <SocialButton image={require('../../../image/facebook.png')}/>
            </View>
            <TouchableOpacity
                style={styles.signButton}
                onPress={()=>{
                    SignUp();
                }}
            >
                <Text>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.loginButton}
            >
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    )
}
const SocialButton = ({image,onPress})=>{
    return(
        <View style={styles.socialView}>
            <Image source={image} style={{height:30,width:30}}/>
        </View>
    )
}
export default SignupScreen;
const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
    },
    textHeader:{
        marginTop:'20%',
        fontWeight:'bold',
        fontSize:50,
        color:'#18C5C4',
        textAlign:'center',
        marginBottom:'10%'
    },
    socialView:{
        margin:'5%',
        height:50,
        width:50,
        backgroundColor:'white',
        alignItems:'center',
        borderRadius:50,
        justifyContent:'center',
    },
    signButton:{
        alignSelf:"center",
        alignItems:'center',
        borderWidth:1,
        height:50,
        width: colors.screenWidth*0.8,
        justifyContent:'center',
        borderColor:'white',
        backgroundColor:colors.green,
        borderRadius:10,
        marginTop:'5%'
    },
    loginButton:{
        alignSelf:"center",
        alignItems:'center',
        borderWidth:1,
        height:50,
        width: colors.screenWidth*0.8,
        justifyContent:'center',
        borderColor:colors.green,
        backgroundColor:'white',
        borderRadius:10,
        marginTop:'5%'
    }
})