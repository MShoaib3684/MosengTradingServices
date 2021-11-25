// import * as React from 'react';
import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/color';

const DATA = [
    {
        id: "1",
        title: "You have got a pickup Request",
        title1: "username here",
        title2: "East 46th Street, New York ",
        title3: "Pizza, Itallian",
        button: "Approve"
    },
    {
        id: "2",
        title: "You have got a pickup Request ",
        title1: "username here",
        title2: "East 46th Street, New York ",
        title3: "Pizza, Itallian",
        button: "Approve"
    },
    {
        id: "3",
        title: "You have got a pickup Request",
        title1: "username here",
        title2: "East 46th Street, New York ",
        title3: "Pizza, Itallian",
        button: "Approve"
    },
    {
        id: "4",
        title: "You have got a pickup Request",
        title1: "username here",
        title2: "East 46th Street, New York ",
        title3: "Pizza, Itallian",
        button: "Approve"
    },
    {
        id: "5",
        title: "You have got a pickup Request",
        title1: "username here",
        title2: "East 46th Street, New York ",
        title3: "Pizza, Itallian",
        button: "Approve"
    },
    {
        id: "6",
        title: "You have got a pickup Request",
        title1: "username here",
        title2: "East 46th Street, New York ",
        title3: "Pizza, Itallian",
        button: "Approve"
    },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <View style={{ flex: 1, backgroundColor: '#ECECEC' }}>
        <View style={[styles.item, backgroundColor]}>
            {/* <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}> */}
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.title1} >{item.title1}</Text>
            <Text style={styles.title1}>{item.title2}</Text>
            <Text style={styles.title1}>{item.title3}</Text>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.btnPrimary}>{item.button}</Text>
            </TouchableOpacity>
        </View>

    </View>
);

const Notification = ({ navigation }) => {
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#fff" : "#fff";
        const color = item.id === selectedId ? 'white' : 'black';
        return (
            <View style={{ flex: 1, backgroundColor: 'green' }}>
                <Item
                    item={item}
                    onPress={() => {
                        setSelectedId(item.id);
                        navigation.navigate('Order')
                    }}
                    backgroundColor={{ backgroundColor }}
                    textColor={{ color }}
                />

            </View>
        );
    };

    return (

        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flex: 0.1, backgroundColor: 'white', alignItems: 'center', flexDirection: 'row', }}>
                <Icon
                    name="notifications"
                    color={COLORS.code}
                    size={35}
                    style={styles.inputIcon}
                />
                <Text style={styles.text}> Notification</Text>
            </View>
            <SafeAreaView style={styles.container}>

                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    extraData={selectedId}
                />
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        padding: 15,
        marginVertical: 5,
        marginHorizontal: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    title1: {
        fontSize: 14,
        color: COLORS.light,
    },
    btnPrimary: {
        backgroundColor: COLORS.code,
        color: "#fff",
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'flex-end',
        justifyContent: 'center',
        borderRadius: 10,
        height: 22,
        width: 60,
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
});

export default Notification;