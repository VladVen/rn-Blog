import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from "../Screens/MainScreen";
import PostScreen from "../Screens/PostScreen";
import BookmarkedScreen from "../Screens/BookmarkedScreen";
import Theme from "../theme";
import {Ionicons} from "@expo/vector-icons";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";

const PostNavigator = createNativeStackNavigator();

const Android = createMaterialBottomTabNavigator();

const screenOptions = {
    headerStyle: {
        backgroundColor: Theme.MAIN_COLOR,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontStyle: 'OpenSans-Bold',
    },

}


export const AppNavigationAndroid = (props) => {
    return (
            <PostNavigator.Navigator initialRouteName={'Footer'} screenOptions={screenOptions}>
                <PostNavigator.Screen name="Post" component={PostScreen}/>
                <PostNavigator.Screen
                    name="Footer"
                    component={BottomNavigatorAndroid}
                    options={{headerShown: false}}
                />
            </PostNavigator.Navigator>
    );
}

function BottomNavigatorAndroid(props) {
    return (
        <Android.Navigator screenOptions={{
            ...screenOptions,
        }} shifting={true} barStyle={{
            backgroundColor: Theme.MAIN_COLOR,
            borderColor: Theme.MAIN_COLOR,
            borderWidth: 2,
            borderTopStartRadius: 10,
            borderTopEndRadius: 10
        }}>
            <Android.Screen name="All"
                            options={{
                                tabBarIcon: (info) => (<Ionicons name="albums" size={24}
                                                                 color={info.color}/>),
                            }}>
                {() => <PostNavigator.Navigator screenOptions={screenOptions}>
                    <PostNavigator.Screen name="Main" component={MainScreen}
                                          options={{
                                              title: 'Home',
                                          }}
                    />
                </PostNavigator.Navigator>}
            </Android.Screen>
            <Android.Screen name="Saved"
                            options={{
                                tabBarIcon: (info) => (<Ionicons name="star" size={24}
                                                                 color={info.color}/>),
                            }}>
                {() => <PostNavigator.Navigator screenOptions={screenOptions}>
                    <PostNavigator.Screen name="Booked" component={BookmarkedScreen}
                                          options={{
                                              title: 'Saved',
                                          }}
                    />
                </PostNavigator.Navigator>}
            </Android.Screen>
        </Android.Navigator>
    );
}


