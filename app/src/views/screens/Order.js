import * as React from 'react';
import { View, Text, ImageBackground, Dimensions } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet } from 'react-native';
import COLORS from '../../consts/color';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { TextInput } from 'react-native';
import STYLES from '../../styles';
import { SafeAreaView } from 'react-native';
import { Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Callout, Circle, Marker } from "react-native-maps";


// export default ({ route }) => {
//     const { item } = route.params;
//     return (
//         <View>
//             <Text></Text>
//         </View>
//     )
// }

const Order = ({ navigation }) => {
    return (
        <SafeAreaView
            style={{ paddingHorizontal: "1%", flex: 1, backgroundColor: '' }}>

            <View style={{ flex: 1, backgroundColor: '' }}>

                <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center' }}>
                    <Icon
                        name="widgets"
                        color={COLORS.code}
                        size={25}
                        style={styles.inputIcon}
                    />
                    <Text style={styles.text}> Order # 112343 is active now</Text>
                </View>
                <View style={{ flex: 6, backgroundColor: '', justifyContent: 'center' }}>

                    <MapView
                        style={styles.map}
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421
                        }}
                        provider="google"
                    >
                    </MapView>
                </View>

                <View style={{ paddingHorizontal: "1%", flex: 1, backgroundColor: '', justifyContent: 'space-around' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('FinalizeOrder')}>
                        <View style={styles.btnPrimary}>
                            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>
                                Finalize Order
                            </Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </View>
        </SafeAreaView>

    )
}
export default Order;
const styles = StyleSheet.create({
    text: {
        marginTop: "1%",
        color: 'black',
        fontSize: 22,
        fontWeight: 'bold',

    },

    inputIcon: {
        marginTop: "2%",
        position: 'relative',
        marginLeft: "2%",

    },

    btnPrimary: {

        backgroundColor: COLORS.code,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },

    map: {
        width: Dimensions.get("window").width,
        height: "100%",
    }
})

