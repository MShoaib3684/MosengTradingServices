import * as React from 'react';
import { View, Text, ImageBackground } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import COLORS from '../../consts/color';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import STYLES from '../../styles';
import { SafeAreaView } from 'react-native';

const Home = () => {
    return (
        <ScrollView
            style={{ paddingHorizontal: "0.0%", paddingVertical: "1%", flex: 1, backgroundColor: COLORS.white }}>

            <View style={{ flex: 1, backgroundColor: '' }}>
                <View style={{ flex: 0.7, backgroundColor: '' }}>
                    <Text style={styles.text}> Welcome , John Deo</Text>
                </View>
                <View style={{ flex: 0.8, flexDirection: 'row', backgroundColor: '' }}>
                    <Icon
                        name="location-on"
                        color={COLORS.code}
                        size={35}
                        style={styles.inputIcon}
                    />
                    <TextInput placeholder="your current location" style={styles.textBox} />
                </View>
                <View style={{ flex: 6, backgroundColor: 'red' }}>
                    <ImageBackground source={require('../../assets/map.png')} style={{ width: '100%', height: '100%' }}>
                    </ImageBackground>
                </View>

            </View>
        </ScrollView>

        // <View style={{ flex: 1, backgroundColor: "#fff" }}>
        //     {/* <View>
        //         <Text style={styles.text}>
        //             Welcome , John Deo
        //         </Text>
        //     </View> */}

        //     <View style={{}}>
        //         <Icon
        //             name="notifications"
        //             color={COLORS.code}
        //             size={35}
        //             style={styles.inputIcon}
        //         />
        //         <TextInput placeholder="your current location" style={styles.textBox} />
        //     </View>
        //     <ImageBackground source={require('../../assets/map.png')} style={{ width: '100%', height: '100%' }}>
        //     </ImageBackground>
        // </View>

    )
}
export default Home;

const styles = StyleSheet.create({
    textBox: {
        color: '#fff',
        backgroundColor: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        borderColor: '#fff',
        borderWidth: 2,
        paddingLeft: "10%",
        marginLeft: "-1%",
    },

    text: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
        paddingLeft: "1%",


    },
    inputIcon: {
        marginTop: "2%",
        position: 'relative',
        marginLeft: "2%",

    },

})