import { StyleSheet, TouchableOpacity, View, Text, FlatList } from "react-native"
import colors from "../../../../Component/colors";
import dataProduct from "../../../../model/discountProduct"
import ViewList from "../../../../Component/viewList";
const NewClothes = () => {

    return (
        <View style={styles.container}>
            <View style={styles.viewText}>
                <Text style={{fontWeight:'bold'}}>
                    New in Clothes
                </Text>
                <TouchableOpacity>
                    <Text style={{fontWeight:"bold",color:colors.blue}}>See all</Text>
                </TouchableOpacity>
            </View>
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
export default NewClothes;
const styles = StyleSheet.create({
    container: {
        margin:10
    },
    viewText:{
        justifyContent:'space-between',
        flexDirection:'row'
    }
})