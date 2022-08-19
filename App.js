import 'react-native-gesture-handler';
import React, {useCallback, useEffect} from "react";
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {useFonts} from "expo-font";
import {Provider} from "react-redux";

import Preloader from "./src/Components/CustomComponent/Preloader";
import MyDrawer from "./src/Navigation/Drawer";
import store from "./src/Store";
import {DB} from "./src/db";
import Theme from "./src/theme";

export default function App() {

    const [fonts] = useFonts({
        'OpenSans-Italic': require('./assets/fonts/OpenSans-Italic.ttf'),
        'OpenSans-Bold': require('./assets/fonts/OpenSans-BoldItalic.ttf')
    })
    const initDB = useCallback(async () => {
        await DB.init()
    }, [DB.init])

    useEffect(() => initDB)

    if (!fonts || !initDB) {
        return <View style={styles.preloader}>
            <ActivityIndicator color={Theme.MAIN_COLOR} size={'large'}/>
        </View>
    }

    return (
        <Provider store={store}>
            <MyDrawer/>
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
