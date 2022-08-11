import React, {useEffect} from "react";
import {Linking, StyleSheet, Text, View} from "react-native";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import AppHeaderButton from "../Components/CustomComponent/AppHeaderButton";
import Theme from "../theme";


const AboutScreen = ({navigation}) => {

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <HeaderButtons HeaderButtonComponent={AppHeaderButton}>
                    <Item title={'Menu'}
                          iconName={'menu'}
                          onPress={() => navigation.toggleDrawer()}
                    />
                </HeaderButtons>
            ),
        })
    }, [])
    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <Text style={{fontFamily: 'OpenSans-Italic'}}>
                Example of React-Navigation App

            </Text>
                <Text style={{fontFamily: 'OpenSans-Bold'}}>
                    App version 1.0.0
                </Text>
            </View>
            <View style={styles.footer}>
                <Text style={{fontFamily: 'OpenSans-Bold'}}>
                    Made by{' '}
                    <Text style={{color: Theme.MAIN_COLOR}}
                          onPress={() => Linking.openURL('https://github.com/VladVen')}>
                        VladVen
                    </Text>
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    main: {
        flex: 1,
        width: '100%',
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    footer: {
        width: '100%',
        justifyContent: "flex-end",
        alignItems: "center",
        marginBottom: 20
    }
})

export default AboutScreen
