import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import TextInput from '../../../Component/textInput';
import colors from '../../../Component/colors';
import { createUser,getUser } from '../../../callApi/userApi';

const LoginScreen = ()=>{
    const [password,setPassword] = useState('');
    const [username,setEmail] = useState('');
    return(
        <View>
            <TextInput title={'Email'} onChangeText={setEmail}/>
            <TextInput title={'Password'} onChangeText={setPassword}/>
            <TouchableOpacity
                style={{
                    height:42,
                    margin:10,
                    alignItems:'center',
                    justifyContent:'center',
                    backgroundColor:colors.blue
                }}
                onPress={()=>{
                    const user = createUser(username,password);
                    console.log(user);
                }}
            >
                <Text style={{color:'white',fontWeight:'bold'}}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}
export default LoginScreen;