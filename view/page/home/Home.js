import { Text, View, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, StatusBar, SectionList } from 'react-native';
import SearchScreen from './search/Search';
import BannerList from './banner/Banner';
import colors from '../../../Component/colors';
import CountDown from '../../../Component/countDown';
import ListDiscount from './discount/listDiscount';
import VideoScreen from './video/Video';
import NewClothes from './product/newClothes';
import NewShoes from './product/newShoes';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();
    const data = [
        { type: 0 },
        { type: 1 },
        { type: 2 },
        { type: 3 },
        { type: 4 },
        { type: 5 },
        { type: 6}
    ];
    const section = [{ data, key: 'section' }]
    const renderItem = ({ item }) => {
        switch (item.type) {
            case 0:
                return <SearchScreen />
            case 1:
                return <BannerList />
            case 2:
                return <TimeDown />
            case 3:
                return <ListDiscount />
            case 4:
                return <VideoScreen />
            case 5:
                return <NewShoes />
            case 6:
                return <NewClothes />
            default:
                return null
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#F2F2F2"/>
            <SectionList
            sections={section}
            keyExtractor={(item,index)=>index.toString()}
            renderItem={renderItem}
            />
        </SafeAreaView>
    )
}

export default HomeScreen;
const TimeDown = () => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ marginLeft: 10, fontWeight: 'bold', fontSize: 12 }}>Discount ends in</Text>
            <CountDown />
            <TouchableOpacity style={styles.buttonText}
            >
                <Text
                    style={{ fontSize: 15, color: colors.blue, fontWeight: 'bold' }}
                >
                    See all
                </Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        
    },
    timeText: {
        fontWeight: 'bold',
        marginLeft: 10,
        backgroundColor: colors.blue,
        color: 'white',
        padding: 5,
        borderRadius: 5,
    },
    space: {
        marginLeft: 5,
        fontWeight: 'bold'
    },
    buttonText: {
        position: 'absolute',
        right: 10,
    }
})