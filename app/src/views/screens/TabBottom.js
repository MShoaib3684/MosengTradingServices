import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Home from './Home';
import Notification from './Notification';
import Post from './Post';
import OrderHistory from './OrderHistory';
import My from './My';
import ManagePayments from './ManagePayment';
import Order from './Order';

const Tab = createBottomTabNavigator();


const TabBottom = ({ }) => {
    return (

        <Tab.Navigator
            screenOptions={{ header: () => null }}
            barStyle={{ paddingBottom: 20 }}>

            {/* <Tab.Screen name="Calls" component={Calls}
                options={{
                    headerShown: false,
                    tabBarLabel: ({ focused }) => (
                        <Text>Calls</Text>
                    ),
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name="call" size={30}
                            style={{ color: focused ? '#F59823' : 'grey', opacity: focused ? 1 : 0.23 }} />
                    ),
                }}
            /> */}
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused, color, size }) => (
                        <SimpleLineIcons name="home" size={28}
                            style={{ color: focused ? '#731D3A' : '#828282', opacity: focused ? 1 : 1 }}
                        />
                    ),
                }}
            />
            <Tab.Screen

                name="Notification"
                component={Notification}
                options={{
                    tabBarLabel: 'Notification',
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon name="notifications" size={30}
                            style={{ color: focused ? '#731D3A' : '#828282', opacity: focused ? 1 : 1 }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Post"
                component={Post}
                options={{
                    tabBarLabel: 'Post',
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon name="add-circle" size={30}
                            style={{ color: focused ? '#731D3A' : '#828282', opacity: focused ? 1 : 1 }}
                        />
                    ),
                }} />
            <Tab.Screen
                name="Order History"
                component={OrderHistory}
                options={{
                    tabBarLabel: 'Order History',
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon name="bookmark-border" size={30}
                            style={{ color: focused ? '#731D3A' : '#828282', opacity: focused ? 1 : 1 }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="My"
                component={My}
                options={{
                    tabBarLabel: 'My',
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon name="person-outline" size={30}
                            style={{ color: focused ? '#731D3A' : '#828282', opacity: focused ? 1 : 1 }}

                        />
                    ),
                }}
            />
        </Tab.Navigator>

    );
}
export default TabBottom;