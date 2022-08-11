import React, {useEffect} from "react";
import {StyleSheet, Text, View} from "react-native";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import AppHeaderButton from "../Components/CustomComponent/AppHeaderButton";


const CreateScreen = ({navigation}) => {
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
    return(
        <View style={styles.container}>
            <Text>
                CreateScreen
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default CreateScreen
