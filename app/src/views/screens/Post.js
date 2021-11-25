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
import { KeyboardAvoidingView } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Callout, Circle, Marker } from "react-native-maps";

const Post = ({ navigation }) => {
    return (
        <SafeAreaView
            style={{ paddingHorizontal: "1%", flex: 1, backgroundColor: COLORS.white }}>
            <View style={{ flex: 1, backgroundColor: '' }}>
                <View style={{ flex: 0.7, backgroundColor: COLORS.white, alignItems: 'center', flexDirection: 'row', }}>
                    <Icon
                        name="widgets"
                        color={COLORS.code}
                        size={35}
                        style={styles.inputIcon}
                    />
                    <Text style={styles.text}> Post Order</Text>
                </View>


                <KeyboardAvoidingView style={{ paddingHorizontal: "3%", flex: 3, backgroundColor: '', alignItems: 'center', justifyContent: 'center' }}>

                    <View style={styles.inputContainer}>
                        <Text style={styles.text1}>Title:</Text>
                        <TextInput
                            style={styles.input} />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.text1}>Price:</Text>
                        <TextInput
                            style={styles.input} />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.text1}>Time:</Text>
                        <TextInput
                            style={styles.input} />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.text1}>Description:</Text>
                        <TextInput
                            style={styles.input} />
                    </View>

                </KeyboardAvoidingView>

                <View style={{ flex: 0.5, backgroundColor: 'white' }}>
                    <Text style={styles.text1}>Pickup Location:</Text>

                </View>
                <View style={{ flex: 1, backgroundColor: 'gray' }}>
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
                <View style={{ paddingHorizontal: "3%", flex: 0.5, backgroundColor: 'white', }}>
                    <Text style={styles.text1}>Drop-off Location:</Text>

                </View>

                <View style={{ flex: 1, backgroundColor: 'gray' }}>
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
                <View style={{ paddingHorizontal: "3%", flex: 0.7, backgroundColor: '', marginTop: "8%", marginBottom: "5%" }}>
                    <TouchableOpacity onPress={() => alert('Successful')}>
                        <View style={styles.btnPrimary}>
                            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>
                                Post
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>

    )
}
export default Post;

const styles = StyleSheet.create({

    map: {
        width: Dimensions.get("window").width,
        height: "100%",
    },
    textBox: {
        paddingLeft: 20,
        color: COLORS.dark,
        backgroundColor: '#fff',
        flex: 1,
        fontSize: 20,

    },
    text: {
        marginTop: "1%",
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
        paddingLeft: "0%",
    },
    text1: {
        flexDirection: 'row',
        color: 'black',
        fontSize: 23,
        fontWeight: 'bold',
    },
    inputIcon: {
        marginTop: "2%",
        position: 'relative',
        marginLeft: "2%",

    },
    input: {
        color: COLORS.dark,
        borderBottomWidth: 0.5,
        flex: 1,
        fontSize: 20,
        fontWeight: '900',
    },

    inputContainer:
    {
        flexDirection: 'row',

    },
    btnPrimary: {

        backgroundColor: COLORS.code,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },


})





// <View style={{ marginTop: "2%", marginBottom: "1%" }}>
//     <Text style={styles.text1}>Pickup Location:</Text>
//     <Image
//         style={{ width: "100%" }}
//         source={require('../../assets/pickup.png')} />
// </View>
// <View style={{ marginTop: "1%", marginBottom: "1%" }}>
//     <Text style={styles.text1}>Drop-0ff Location:</Text>
//     <Image
//         style={{ width: "100%" }}
//         source={require('../../assets/dropoff.png')} />
// </View>
// <TouchableOpacity onPress={() => navigation.navigate('TabBottom')}>

//     <View style={styles.btnPrimary}>
//         <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>
//             Post
//         </Text>
//     </View>
// </TouchableOpacity>
// </View>
