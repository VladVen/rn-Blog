import React from "react";
import {createDrawerNavigator} from '@react-navigation/drawer';
import AboutScreen from "../Screens/AboutScreen";
import {Platform} from "react-native";
import {AppNavigationAndroid} from "./AppNavigationAndroid";
import {AppNavigationIOS} from "./AppNavigationIOS";
import CreateScreen from "../Screens/CreateScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Theme from "../theme";
import {AntDesign, Ionicons} from "@expo/vector-icons";

const Drawer = createDrawerNavigator();
const AboutStack = createNativeStackNavigator()
const CreateStack = createNativeStackNavigator()

const screenOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === "android" ? Theme.MAIN_COLOR : '#fff',
    },
    headerTintColor: Platform.OS === "ios" ? Theme.MAIN_COLOR : '#fff',
    headerTitleStyle: {
        fontStyle: 'OpenSans-Bold',
    },

}

const AboutPage = () => {
    return (
        <AboutStack.Navigator screenOptions={screenOptions}>
            <AboutStack.Screen name={'About'} component={AboutScreen}
                               options={{
                                   title: 'About App',
                               }}/>
        </AboutStack.Navigator>
    )
}
const CreatePage = () => {
    return (
        <CreateStack.Navigator screenOptions={screenOptions}>
            <CreateStack.Screen name={'Create'} component={CreateScreen}/>
        </CreateStack.Navigator>
    )
}


const MyDrawer = () => {
    const UsingDevice = Platform.OS === 'android' ? AppNavigationAndroid : AppNavigationIOS

    return (
        <NavigationContainer screenOptions={{

        }}>
            <Drawer.Navigator swipeEnabled={true}
                              screenOptions={{
                                  headerShown: false,
                                  drawerActiveTintColor: Theme.MAIN_COLOR,
                                  labelStyle: {
                                    fontFamily: 'OpenSans-Bold'
                                  },
                                  drawerStyle: {
                                      borderTopEndRadius: 40,
                                      borderBottomRightRadius: 40
                                  }
                              }}

            >
                <Drawer.Screen name="MainScreen" component={UsingDevice}
                               options={{
                                   drawerLabel: 'Main',
                                   drawerIcon: (info) => (<Ionicons name="star" size={20}
                                                                    color={info.color}/>)
                               }}

                />
                <Drawer.Screen name="CreateScreen" component={CreatePage}
                               options={{
                                   drawerLabel: 'Create Post',
                                   drawerIcon: (info) => <Ionicons name="create" size={20} color={info.color} />
                               }}/>
                <Drawer.Screen name="About App" component={AboutPage}
                               options={{
                                   drawerIcon: (info) => <AntDesign name="questioncircle" size={20} color={info.color} />
                               }}
                />

            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default MyDrawer