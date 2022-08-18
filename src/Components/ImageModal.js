import React from "react";
import {Button, Image, Modal, StyleSheet, View} from "react-native";
import Theme from "../theme";


const ImageModal = ({visible, img, goBack}) => {
    return (
        <Modal visible={visible} animationType={'fade'} transparent={true}>
            <View style={styles.container}>
                <Image source={{uri: img}} style={styles.image}/>
            </View>
            <Button title={'Go Back'} color={Theme.MAIN_COLOR} onPress={() => goBack(false)}/>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: 'rgba(0,0,0, 0.5)'
    },
    image: {
        width: "100%",
        height: "100%",
    }
})


export default ImageModal