import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import SearchScreen from './search/Search';
import BannerList from './banner/Banner';
import colors from '../../../Component/colors';
import CountDown from '../../../Component/countDown';
import ListDiscount from './discount/listDiscount';
import VideoScreen from './video/Video';
import NewShoe from './product/NewShoe';
import NewClothes from './product/newClothes';
const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <SearchScreen />
            <BannerList />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ marginLeft: 10, fontWeight: 'bold', fontSize: 12 }}>Discount ends in</Text>
                <CountDown/>
                <TouchableOpacity style={styles.buttonText}>
                    <Text
                        style={{fontSize:15,color:colors.blue,fontWeight:'bold'}}
                    >
                        See all
                    </Text>
                </TouchableOpacity>
            </View>
            <ListDiscount />
            <VideoScreen/>
            <NewShoe />
            <NewClothes />
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        marginTop: '10%'
    },
    timeText: {
        fontWeight: 'bold',
        marginLeft: 10,
        backgroundColor: colors.blue,
        color:'white',
        padding:5,
        borderRadius: 5,
    },
    space:{
        marginLeft:5,
        fontWeight:'bold'
    },
    buttonText:{
        position:'absolute',
        right:10,
    }
})