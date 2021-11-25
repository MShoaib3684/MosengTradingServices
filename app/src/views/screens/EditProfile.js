import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput } from "react-native";
import { ImageBackground } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { SafeAreaView } from 'react-native';
import { Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';
import COLORS from '../../consts/color';
import STYLES from "../../styles";

const EditProfile = ({ navigation }) => {
    return (
        <>
            <SafeAreaView style={{ paddingHorizontal: "2%", flex: 1, backgroundColor: '', }}>

                <View style={{ flex: 0.1, backgroundColor: '', flexDirection: 'row' }}>
                    <Icon
                        name="person-outline"
                        color='gray'
                        size={45}
                        style={styles.inputIcon}
                    />
                    <Text style={styles.text}> Edit Profile</Text>
                </View>


                <View style={{ paddingHorizontal: "5%", flex: 0.6, backgroundColor: 'white' }}>

                    <View style={STYLES.inputContainer}>
                        <TextInput placeholder="Full Name" style={STYLES.input} />
                    </View>
                    <View style={STYLES.inputContainer}>
                        <TextInput
                            placeholder="Password"
                            style={STYLES.input}
                            secureTextEntry
                        />
                    </View>
                    <View style={STYLES.inputContainer}>
                        <TextInput placeholder="Email" style={STYLES.input} />
                    </View>
                    <View style={STYLES.inputContainer}>
                        <TextInput
                            placeholder="Password"
                            style={STYLES.input}
                            secureTextEntry
                        />
                    </View>
                    <View style={STYLES.inputContainer}>
                        <TextInput placeholder="+1" style={STYLES.input} />
                    </View>

                </View>

                <View style={{ flex: 0.2, backgroundColor: 'white', }}>

                </View>

                <View style={{ flex: 0.2, backgroundColor: '', justifyContent: 'space-around' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('My')}>
                        <View style={styles.btnPrimary}>
                            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20, }}>
                                Update
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        </>


    )
}




export default EditProfile;

const styles = StyleSheet.create({
    text: {
        marginTop: "3%",
        color: 'black',
        fontSize: 30,
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
        borderRadius: 5,
    },
    btnModal: {
        backgroundColor: COLORS.code,
        height: 50,
        width: 330,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-start',
        borderRadius: 5,
    },



});