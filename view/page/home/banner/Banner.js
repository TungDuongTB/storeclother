import { View, Text, FlatList, Image, StyleSheet, Dimensions } from "react-native"
import bannerModel from '../../../../model/banner'
import colors from "../../../../Component/colors"
import useBannerEffect from "../../../../hooks/useBannerEffect"
import { useRef, useState } from "react"
const BannerList = () => {
    const scrollViewRef = useRef();
    const [dataBanner, setDataBanner] = useState(bannerModel);
    useBannerEffect({ dataBanner: dataBanner, scrollViewRef: scrollViewRef })
    return (
        <View>
            <FlatList
                data={bannerModel}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Image source={item.url} style={styles.image} />
                            <View style={styles.floating}>
                                <View >
                                    <Text style={{ fontWeight: 'bold', fontSize: 14, color: 'white' }}>{item.title}</Text>
                                    <View style={styles.boxText}>
                                        <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'white' }}>Up to {item.discound}%</Text>

                                    </View>
                                    <Text style={{ fontSize: 7, color: 'white' }}>{item.content}</Text>
                                </View>
                            </View>
                        </View>
                    )
                }}
                horizontal
                ref={scrollViewRef}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                style={[styles.container]}
            />

        </View>
    )
}
export default BannerList;

const styles = StyleSheet.create({
    container: {
        margin: 10,
        flexGrow: 0,
        position: 'relative',
    },
    image: {
        resizeMode: 'cover',
        width: colors.screenWidth,
        height: 162,
    },
    floating: {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: '40%'
    },
    boxText: {
        backgroundColor: colors.orange,
        alignItems:'center',
        width:110
    }
})