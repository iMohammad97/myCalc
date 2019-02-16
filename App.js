/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {
    AsyncStorage,
    Platform,
    StyleSheet,
    Text,
    View,
    StatusBar,
    TouchableOpacity,
    Image,
    ActivityIndicator,
    SafeAreaView
} from 'react-native';
import {createStackNavigator, createSwitchNavigator, createAppContainer, createDrawerNavigator, DrawerItems} from 'react-navigation';
import HomeScreen from "./src/Home.js";
import CalendarScreen from "./src/Calendar.js";
import DayScreen from "./src/Day.js";
// import Events from "./src/Events.js";
const color1 = '#262626';
const color2 = '#424242';
const color3 = '#283fff';
const color4 = '#ffffff';
const color5 = '#a0a0a0';

const DrawerContent = (props) => (
    <SafeAreaView>
        {/*<View*/}
            {/*style={{*/}
                {/*// backgroundColor: '#f50057',*/}
                {/*height: 60,*/}
                {/*alignItems: 'center',*/}
                {/*justifyContent: 'center',*/}
            {/*}}*/}
        {/*>*/}

        {/*</View>*/}
        <DrawerItems {...props} />
    </SafeAreaView>
);
const AppStack = createStackNavigator({Home: HomeScreen, Calendar: CalendarScreen, Day: DayScreen});
const drw = createDrawerNavigator(
    {
        Home: HomeScreen,
        Calendar: CalendarScreen,
        Day: DayScreen,
    }, {
        drawerPosition: 'left',
        drawerWidth: 80,
        drawerBackgroundColor: color1,
        contentOptions: {
            activeTintColor: color4,
            inactiveTintColor: color5,
            labelStyle: {
                // fontFamily: Platform.OS === 'ios' ? "IRANYekan" : "IRANYekanBold",
                fontSize: 15,
                // fontWeight: Platform.OS === 'ios' ? "bold" : "normal",
                textAlign: 'right',
            },
            itemStyle: {
                flexDirection: 'row-reverse',
                justifyContent: 'center'
            }
        },
        contentComponent: DrawerContent,
    });
export default createAppContainer(
    createSwitchNavigator(
        {
            App: AppStack,
            drw: drw,
        },
        {
            initialRouteName: 'App',
            initialRouteName: 'drw',
        })
);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
