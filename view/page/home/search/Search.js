import { Ionicons } from '@expo/vector-icons';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import colors from '../../../../Component/colors';
const SearchScreen = ()=>{
    return (
        <View style={styles.container}>
            <View style={styles.toolBar}>
                <Ionicons name='search' size={16} />
                <TextInput 
                placeholder='Tìm kiếm cái gì bạn muốn'
                style={{marginLeft:15}}
                />
            </View>
                <Ionicons name='camera' color={colors.green} size={30}/>
        </View>
    )
}

export default SearchScreen;
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems: 'center',
    },
    toolBar:{
        flexDirection:'row',
        alignItems: 'center',
        borderWidth:1,
        marginRight:'5%',
        width:314,
        height:30,
        marginLeft:'5%',
        padding:'1.5%',
        backgroundColor:colors.gray
    }
})