import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Home from './Home';
import Notification from './Notification';
import Post from './Post';
import OrderHistory from './OrderHistory';
import My from './My';
import COLORS from '../../consts/color';

const Tab = createBottomTabNavigator();


const TabBottom = ({ navigation }) => {
    return (

        <Tab.Navigator
            screenOptions={{ header: () => null }}
            tabBarActiveTintColor="#731D3A"
            tabBarInActiveTintColor="grey"
            barStyle={{ paddingBottom: 20 }}>

            {/* // activeColor="#731D3A"
        // barStyle={{ backgroundColor: '#731D3A' }} */}

            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused, color, size }) => (
                        <SimpleLineIcons name="home" size={28} color={{}} />
                    ),
                }}
            />

            <Tab.Screen

                name="Notification"
                component={Notification}
                options={{
                    tabBarLabel: 'Notification',
                    tabBarIcon: ({ }) => (
                        <Icon name="notifications" size={30} />
                    ),
                }}
            />
            <Tab.Screen
                name="Post"
                component={Post}
                options={{
                    tabBarLabel: 'Post',
                    tabBarIcon: ({ }) => (
                        <Icon name="add-circle" size={30} />
                    ),
                }} />
            <Tab.Screen
                name="Order History"
                component={OrderHistory}
                options={{
                    tabBarLabel: 'Order History',
                    tabBarIcon: ({ }) => (
                        <Icon name="bookmark-border" size={30} />
                    ),
                }}
            />
            <Tab.Screen
                name="My"
                component={My}
                options={{
                    tabBarLabel: 'My',
                    tabBarIcon: ({ }) => (
                        <Icon name="person-outline" size={30} />
                    ),
                }}
            />
        </Tab.Navigator>

    );
}
export default TabBottom;