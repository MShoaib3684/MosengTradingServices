// import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import STYLES from '../../styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/color';
import { TextInput } from 'react-native-gesture-handler';

const DATA = [
    {
        id: "1",
        title: "Orders # 112343",
        price: "Price :  200 $",
        title1: "10 : 00 Pm",
        title2: "East 46th Etreet, New York ",
        title3: "Pizza, Itallian",

    },

    {
        id: "2",
        title: "Orders # 112343",
        price: "Price : 200 $",
        title1: "10 : 00 Pm",
        title2: "East 46th Street, New York ",
        title3: "Pizza, Itallian",
    },
    {
        id: "3",
        title: "Orders # 112343",
        price: "Price : 200 $",
        title1: "10 : 00 Pm",
        title2: "East 46th Street, New York ",
        title3: "Pizza, Itallian",
    },
    {
        id: "4",
        title: "Orders # 112343",
        price: "Price : 200 $",
        title1: "10 : 00 Pm",
        title2: "East 46th Street, New York ",
        title3: "Pizza, Itallian",
    },
    {
        id: "5",
        title: "Orders # 112343",
        price: "Price : 200 $",
        title1: "10 : 00 Pm",
        title2: "East 46th Street, New York ",
        title3: "Pizza, Itallian",
    },
    {
        id: "6",
        title: "Orders # 112343",
        price: "Price : 200 $",
        title1: "10 : 00 Pm",
        title2: "East 46th Street, New York ",
        title3: "Pizza, Itallian",
    },
    {
        id: "7",
        title: "Orders # 112343",
        price: "Price : 200 $",
        title1: "10 : 00 Pm",
        title2: "East 46th Street, New York ",
        title3: "Pizza, Itallian",
    },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <View style={{ flex: 1, backgroundColor: '#ECECEC' }}>
        <View style={[styles.item, backgroundColor]}>
            {/* <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}> */}
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>{item.price}</Text>
            <Text style={styles.title1} >{item.title1}</Text>
            <Text style={styles.title1}>{item.title2}</Text>
            <Text style={styles.title1}>{item.title3}</Text>

        </View>
    </View>
    // <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    //     <Text style={[styles.title, textColor]}>{item.title},{item.title1}</Text>

    // </TouchableOpacity>
);

const OrderHistory = () => {
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#fff" : "#fff";
        const color = item.id === selectedId ? 'white' : 'black';

        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    };

    return (

        <View style={{ flex: 1 }}>
            <View style={{}}>
                <Icon
                    name="bookmark-border"
                    color={COLORS.code}
                    size={35}
                    style={styles.inputIcon}
                />
                <View style={STYLES.inputContainer}>

                    <Text style={styles.text}>Order History</Text>
                </View>
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
        fontWeight: 'bold',
        color: 'black',
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.light,
        alignSelf: 'flex-end',
        top: -10,
        marginTop: -15,
    },
    title1: {
        fontSize: 14,
        color: COLORS.light,
    },

    text: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
        paddingLeft: "12%",
        paddingHorizontal: "10%",

    },
    inputIcon: {
        marginTop: "5.5%",
        position: 'absolute',
        marginLeft: 10,

    },
});

export default OrderHistory;