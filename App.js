import 'react-native-gesture-handler';
import React from "react";
import {Platform, StyleSheet, View} from 'react-native';
import {useFonts} from "expo-font";
import {Provider} from "react-redux";

import Preloader from "./src/Components/CustomComponent/Preloader";
import MyDrawer from "./src/Navigation/Drawer";
import store from "./src/Store";

export default function App() {

    const [fonts] = useFonts({
        'OpenSans-Italic': require('./assets/fonts/OpenSans-Italic.ttf'),
        'OpenSans-Bold': require('./assets/fonts/OpenSans-BoldItalic.ttf')
    })
    if (!fonts) {
        return <View style={styles.preloader}><Preloader/></View>
    }
    return (
        <Provider store={store}>
        <MyDrawer />
        </Provider>
    );
}

const styles = StyleSheet.create({
    preloader: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
