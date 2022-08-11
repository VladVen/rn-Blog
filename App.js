import 'react-native-gesture-handler';
import React from "react";
import {Platform, StyleSheet, View} from 'react-native';
import {useFonts} from "expo-font";
import Preloader from "./src/Components/CustomComponent/Preloader";
import {AppNavigationIOS} from "./src/Navigation/AppNavigationIOS";
import {AppNavigationAndroid} from "./src/Navigation/AppNavigationAndroid";
import MyDrawer from "./src/Navigation/Drawer";

export default function App() {

    const [fonts] = useFonts({
        'OpenSans-Italic': require('./assets/fonts/OpenSans-Italic.ttf'),
        'OpenSans-Bold': require('./assets/fonts/OpenSans-BoldItalic.ttf')
    })
    if (!fonts) {
        return <View style={styles.preloader}><Preloader/></View>
    }
    const Navigation = Platform.OS === "ios" ?  <AppNavigationIOS/> : <AppNavigationAndroid />
    return (
        <MyDrawer />
    );
}

const styles = StyleSheet.create({
    preloader: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
