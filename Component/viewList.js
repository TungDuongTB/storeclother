import { Ionicons } from "@expo/vector-icons";
import colors from "./colors";
import { useState } from "react";

const { View, StyleSheet, Text, Image, TouchableOpacity } = require("react-native")

const ViewList = ({ router }) => {
    return (
        <View style={styles.container}>
            <Image source={router.image} style={styles.image} />
            <View style={{ marginLeft: 15 }}>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginRight:10}}>
                    <Text style={{ fontSize: 9, fontWeight: 'bold' }}>{router.company}</Text>
                    <TouchableOpacity>
                        <Ionicons name="heart" color={'red'}/>
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 8, color: '#A4A4A4' }}>{router.color}</Text>
                <Text style={{ fontSize: 9, fontWeight: 'bold', color: colors.blue }}>$ {router.reducePrice}</Text>
                <Text style={{ fontSize: 7, color: '#A4A4A4', textDecorationLine: 'line-through' }}>$ {router.basicPrice}</Text>
            </View>
        </View>
    )
}
export default ViewList;
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 10,
        height: 149,
        width: 121,
        borderRadius: 3
    },
    image: {
        width: 121,
        height: 91,
        marginBottom: 6
    }
})