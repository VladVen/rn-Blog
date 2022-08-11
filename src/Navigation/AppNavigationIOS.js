import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from "../Screens/MainScreen";
import PostScreen from "../Screens/PostScreen";
import BookmarkedScreen from "../Screens/BookmarkedScreen";
import Theme from "../theme";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Ionicons} from "@expo/vector-icons";

const PostNavigator = createNativeStackNavigator();
const IOS = createBottomTabNavigator();

const screenOptions = {
    headerStyle: {
        backgroundColor: '#fff',
    },
    headerTintColor: Theme.MAIN_COLOR,

}


function BottomNavigatorIOS(props) {
    return (
        <IOS.Navigator screenOptions={{
            ...screenOptions,
            tabBarShowLabel: false,
            tabBarStyle: {
                position: 'absolute',
                backgroundColor:'#fff',
                height: 40,
                borderTopStartRadius: 10,
                borderTopEndRadius: 10,
            },
            tabBarActiveTintColor:Theme.MAIN_COLOR,
        }}>
            <IOS.Screen name="Main" component={MainScreen}
                        options={{
                            tabBarIcon: (info) => (<Ionicons name="albums" size={24}
                                                             color={info.color}/>),
                        }}/>
            <IOS.Screen name="Booked" component={BookmarkedScreen}
                        options={{
                            tabBarIcon: (info) => (<Ionicons name="star" size={24}
                                                             color={info.color}/>),
                        }}/>
        </IOS.Navigator>
    );
}




export const AppNavigationIOS = (props) => {

    return (
            <PostNavigator.Navigator initialRouteName={'Footer'} screenOptions={{
                ...screenOptions, headerTitleStyle: {
                    fontStyle: 'OpenSans-Bold',
                },
            }}>
                <PostNavigator.Screen name="Main" component={MainScreen}
                                      options={{
                                          title: 'My home',
                                      }}
                />
                <PostNavigator.Screen name="Post" component={PostScreen}/>
                <PostNavigator.Screen
                    name="Footer"
                    component={ BottomNavigatorIOS}
                    options={{headerShown: false}}
                />
            </PostNavigator.Navigator>
    );
}



