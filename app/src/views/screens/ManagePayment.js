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

const ManagePayment = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <SafeAreaView style={{ paddingHorizontal: "2%", flex: 1, backgroundColor: '', }}>

                <View style={{ flex: 0.1, backgroundColor: '', flexDirection: 'row' }}>
                    <Icon
                        name="payment"
                        color={COLORS.code}
                        size={35}
                        style={styles.inputIcon}
                    />
                    <Text style={styles.text}> Manage Payment</Text>
                </View>

                <View style={{ flex: 0.1, backgroundColor: '#ffffff', }}>
                </View>
                <View style={{ flex: 0.3, backgroundColor: '', }}>
                    <Image
                        style={{ width: "100%", height: '100%' }}
                        source={require('../../assets/card.png')} />
                </View>

                <View style={{ flex: 0.3, backgroundColor: '', }}>

                </View>


                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >


                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={STYLES.inputContainer}>
                                <TextInput placeholder="Name" style={STYLES.input} />
                            </View>
                            <View style={STYLES.inputContainer}>
                                <TextInput placeholder="Card No" style={STYLES.input} />
                            </View>

                            <View style={STYLES.inputContainer}>
                                <TextInput placeholder="Exp Date" keyboardType="numeric" style={STYLES.input} />
                                <Text>
                                    {"\n"}
                                    {"\n"}
                                </Text>
                                <TextInput placeholder="Cvv" keyboardType="numeric" style={STYLES.input} />
                            </View>
                            <View style={{ flex: 0.2, backgroundColor: '', marginTop: 10, marginBottom: 10, }}>
                                <TouchableOpacity onPress={() => alert('card Successfully Added')}>
                                    <View style={styles.btnModal}>
                                        <Text onPress={() => setModalVisible(false)} style={{ color: '#fff', fontWeight: 'bold', fontSize: 20, }}>
                                            Add New Card
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                </Modal>

                <View style={{ flex: 0.2, backgroundColor: '', justifyContent: 'space-around' }}>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <View style={styles.btnPrimary}>
                            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20, }}>
                                Add New Card
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        </>


    )
}




export default ManagePayment;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",

    },
    input: {
        color: COLORS.light,
        borderBottomWidth: 1,
        flex: 1,
        fontSize: 20,
        fontWeight: '900',
    },
    modalView: {
        backgroundColor: "#fff",
        borderTopEndRadius: 25,
        borderTopLeftRadius: 25,
        padding: 42,
        alignItems: "flex-start",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5
    },

    text: {
        marginTop: "1%",
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
        paddingLeft: "0%",
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
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },



});