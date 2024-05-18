import { FlatList, StyleSheet, Text, View } from "react-native"
import dataProduct from '../../../../model/discountProduct'
import ViewList from "../../../../Component/viewList"
const VideoScreen = ()=>{
    return(
        <View style={styles.container}>
            <Text style={{fontSize:15,fontWeight:'bold'}}>
                Video
            </Text>
            <FlatList 
                data={dataProduct}
                renderItem={({item})=>{
                    return(
                        <ViewList router={item}/>
                    )
                }}
                horizontal
            />
        </View>
    )
}
export default VideoScreen;
const styles = StyleSheet.create({
    container:{
        margin:10
    }
})