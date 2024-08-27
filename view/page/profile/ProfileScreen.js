import {StyleSheet, Text, View,Image, TouchableOpacity} from 'react-native';
import dataProfile from '../../../model/profile'
import { Ionicons } from '@expo/vector-icons';
import colors from '../../../Component/colors'
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = ()=>{
    return (
        <View>
             <View style={styles.container}>
                <Image source={dataProfile.avatar} style={styles.avatar}/>
                <Text style={{fontWeight:'bold',fontSize:11,marginTop:6}}>{dataProfile.lastName+' '+dataProfile.fistName}</Text>
                <Text style={{fontSize:9}}>{dataProfile.email}</Text>
            </View>
            <View>
                <MenuButton title={'History'} icon={'book'} color={colors.blue}/>
                <MenuButton title={'Wallet'} icon={'wallet'} color={colors.blue}/>
                <MenuButton title={'QR code'} icon={'qr-code'} color={colors.blue}/>
                <MenuButton title={'FAQ'} icon={'chatbox-ellipses'} color={colors.blue}/>
                <MenuButton title={'Change location'} icon={'map'} color={colors.blue}/>
            </View>
            <View style={{ borderBottomWidth: 1, borderBottomColor: 'black', marginVertical: 10 }} />
            <View>
                <TextButton title={'Change location'}/>
                <TextButton title={'Privacy policy'}/>
                <TextButton title={'Chat with admin'}/>
                <TextButton title={'About OYAYUBI'}/>
                <TextButton title={'Return'}/>
                <TextButton title={'Log Out'} onPress={'Signup'}/>
            </View>
            
        </View>
    )
}
const MenuButton = ({title,icon,onPress,color})=>{
    const navigation = useNavigation();
    return(
        <TouchableOpacity
            onPress={()=>{

            }}
            style={styles.button}
        >
                <Ionicons name={icon} size={28} color={color}/>
                <Text style={{marginLeft:24}}>{title}</Text>
        </TouchableOpacity>
    )
}
const TextButton = ({title,onPress})=>{
    const navigation = useNavigation();
    return(
        <TouchableOpacity
            onPress={()=>{navigation.navigate(onPress)}}
            style={{margin:10}}
        >
            <Text style={{fontSize:15}}>{title}</Text>
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
    },
    button:{
        flexDirection:'row',
        alignItems:'center',
        margin:10
    }
})