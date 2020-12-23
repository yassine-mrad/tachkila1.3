import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Create from '../components/Create';
import Profile from '../components/Profile';
import Liste from '../components/Liste';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator()
const TabNavigator = () => {
    return <Tab.Navigator>
        <Tab.Screen name='Liste' component={Liste}
            options={{
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
            }}>

        </Tab.Screen>
        <Tab.Screen
            name='Create'
            component={Create}
            options={{
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="plus" color={color} size={26} />
                ),
            }}>

        </Tab.Screen>
        <Tab.Screen
            name='Profile'
            component={Profile}
            options={{
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="account" color={color} size={26} />
                ),
            }}>

        </Tab.Screen>

    </Tab.Navigator>
}

const styles = StyleSheet.create({

})
export default TabNavigator;