import * as React from 'react';
import { View, Text, ImageBackground } from 'react-native'
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

const Post = ({ navigation }) => {
    return (
        <SafeAreaView
            style={{ paddingHorizontal: "0.0%", paddingVertical: "1%", flex: 1, backgroundColor: COLORS.white }}>

            <ScrollView style={{ flex: 1, backgroundColor: '' }}>
                <View style={{ flex: 0.5, backgroundColor: '', flexDirection: 'row' }}>
                    <Icon
                        name="widgets"
                        color={COLORS.code}
                        size={35}
                        style={styles.inputIcon}
                    />
                    <Text style={styles.text}> Post Order</Text>
                </View>

                <View style={{ paddingHorizontal: "5%", paddingVertical: "2%", flex: 6, backgroundColor: '' }}>
                    <View style={styles.inputContainer}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Text style={styles.text1}>Title:</Text>
                        </View>
                        <TextInput style={styles.input} />
                    </View>
                    <View style={styles.inputContainer}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Text style={styles.text1}>Price:</Text>
                        </View>
                        <TextInput style={styles.input} />
                    </View>
                    <View style={styles.inputContainer}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Text style={styles.text1}>Time:</Text>
                        </View>
                        <TextInput style={styles.input} />
                    </View>
                    <View style={styles.inputContainer}>
                        <View style={{ flex: 1, }}>
                            <Text style={styles.text1}>Description:</Text>
                        </View>
                        <TextInput style={styles.input} />
                    </View>
                    <View style={{ marginTop: "2%", marginBottom: "1%" }}>
                        <Text style={styles.text1}>Pickup Location:</Text>
                        <Image
                            style={{ width: "100%" }}
                            source={require('../../assets/pickup.png')} />
                    </View>
                    <View style={{ marginTop: "1%", marginBottom: "1%" }}>
                        <Text style={styles.text1}>Drop-0ff Location:</Text>
                        <Image
                            style={{ width: "100%" }}
                            source={require('../../assets/dropoff.png')} />
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('TabBottom')}>

                        <View style={styles.btnPrimary}>
                            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>
                                Post
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>

    )
}
export default Post;

const styles = StyleSheet.create({

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
        color: COLORS.light,
        borderBottomWidth: 0.5,
        flex: 1,
        flexDirection: 'row',
        fontSize: 20,
        fontWeight: '900',
        paddingHorizontal: "35%",
    },

    inputContainer:
    {
        flexDirection: 'row',

    },
    btnPrimary: {
        marginTop: "3%",
        backgroundColor: COLORS.code,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },


})