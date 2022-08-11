import React from "react";
import {HeaderButton} from "react-navigation-header-buttons";
import {Platform} from "react-native";
import Theme from "../../theme";
import {Ionicons} from "@expo/vector-icons";


const AppHeaderButton = (props) => {
    return (
        <HeaderButton {...props}
                      iconSize={24}
                      IconComponent={Ionicons}
                      color={props.color ? props.color : Platform.OS === 'android' ? 'white' : Theme.MAIN_COLOR}
        />
    )
}

export default AppHeaderButton