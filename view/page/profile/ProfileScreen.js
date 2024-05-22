import {StyleSheet, Text, View,Image, TouchableOpacity} from 'react-native';
import dataProfile from '../../../model/profile'
import { Ionicons } from '@expo/vector-icons';

import { useState } from 'react';
const ProfileScreen = ()=>{
    return (
        <View>
             <View style={styles.container}>
                <Image source={dataProfile.avatar} style={styles.avatar}/>
                <Text style={{fontWeight:'bold',fontSize:11,marginTop:6}}>{dataProfile.lastName+' '+dataProfile.fistName}</Text>
                <Text style={{fontSize:9}}>{dataProfile.email}</Text>
            </View>
            <View>
            </View>
            
        </View>
    )
}
const textButton = ({title,icon,onPress})=>{
    return(
        <TouchableOpacity>
                <Ionicons name={icon} size={28} />
                <Text>{title}</Text>
        </TouchableOpacity>
    )
}
export default ProfileScreen;
const styles = StyleSheet.create({
    container:{
        marginTop:'5%',
        alignItems:'center'
    },
    avatar:{
        height : 86,
        width : 86,
        borderRadius:50
    }
})