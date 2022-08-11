import React from "react";
import {Image, View} from "react-native";

const Preloader = () => {
    return(
        <View>
            <Image source={require('../../../assets/loader.gif')} />
        </View>
    )
}
export default Preloader