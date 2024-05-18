import { useState } from 'react';
import {View,Text, StyleSheet, FlatList} from'react-native';
import discountProduct from '../../../../model/discountProduct'
import ViewList from '../../../../Component/viewList';
export default ListDiscount = ()=>{
    const [dataProduct,setDataProduct] = useState(discountProduct)
    return(
        <View style={styles.container}>
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

const styles = StyleSheet.create({
    container:{
        margin:10
    }
})