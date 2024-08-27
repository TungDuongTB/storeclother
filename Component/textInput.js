import React, { useEffect, useState } from "react";
import { View,StyleSheet,Text, TextInput } from "react-native";
import colors from "./colors";

export default textInput =({title,onChangeText,type,errorMesses})=>{
    const [messe,setMesses] = useState('');
    const [test,setTest] = useState('');
    useEffect(()=>{
        switch (title) {
            case 'repeat password':
                setMesses('Vui lòng nhập đầy đủ thông tin !');
                break;
            case 'e-mail':
                setMesses('Email không đúng định dạng !');
                break;
            case 'password':
                setMesses('Password phải viết hoa chữ cái đầu và chứa ký tự đặc biệt @,.~... !');
                break;
            default:
                setMesses('')
                break;
        }
    },[errorMesses])
    return(
        <View style={styles.container}>
            {
            type?null:
            <Text style={{margin:10}}>{title}</Text>
            }
            <View style={styles.textInput}>
                <TextInput
                 onChangeText={text=>onChangeText(text)}
                  placeholder={title}
                 style={{marginLeft:5}}
                 
                 />
            </View>
            {errorMesses ? <Text style={{marginLeft:'10%',marginTop:'5%',color:'red'}}>{messe}</Text>:null }
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        margin:10
    },
    textInput:{
        justifyContent:'center',
        height: 42,
        borderWidth: 1,
        borderColor:'white',
        backgroundColor:'white',
        borderRadius: 50,
        width:colors.screenWidth*0.8,
        alignSelf:'center',
        padding:10,
        shadowColor: '#18C5C4', // Màu bóng
        shadowOpacity: 0.25, // Độ mờ của bóng
        elevation: 10,
    }
})