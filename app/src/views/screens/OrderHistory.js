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
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "Orders# 112343               Price:200$",


    },

    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "You have got a pickup request",
        title1: "username here east 46th street,New Yourk Pizza, Itallian"
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "You have got a pickup request",
        title1: "username here east 46th street,New Yourk Pizza, Itallian"
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d73",
        title: "You have got a pickup request",
        title1: "username here east 46th street,New Yourk Pizza, Itallian"
    },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <Text style={[styles.title, textColor]}>{item.title},{item.title1}</Text>
    </TouchableOpacity>
);

const OrderHistory = () => {
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#fff";
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
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 18,
    },
    title1: {
        fontSize: 10,
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