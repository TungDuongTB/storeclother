import { Text, View, StyleSheet, Dimensions } from 'react-native';
import SearchScreen from './search/Search';
import BannerList from './banner/Banner';
import colors from '../../../Component/colors';
const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <SearchScreen />
            <BannerList />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ marginLeft: 10, fontWeight: 'bold', fontSize: 12 }}>Giảm giá kết thúc</Text>
                <Text style={styles.timeText}>10</Text>
                <Text style={styles.space}>:</Text>
                <Text style={styles.timeText}>10</Text>
                <Text style={styles.space}>:</Text>
                <Text style={styles.timeText}>10</Text>
            </View>
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
    }
})