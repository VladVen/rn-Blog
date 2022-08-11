import React, {useState} from "react";
import {Alert, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";
import DoubleClick from "react-native-double-tap";

const Post = ({post, onOpen}) => {

    const [buttonColor, setButtonColor] = useState('white')


    const changeColor = () => {
        if (buttonColor === "white") {
            setButtonColor("red");
        } else {
            setButtonColor("white");
        }
    }


    return (
        <DoubleClick doubleTap={changeColor}
                     singleTap={() => onOpen(post)}
                     delay={500}
        >
            <View style={styles.container}>
                <ImageBackground source={{uri: post.img}} style={styles.image}>
                    { post.title && <View style={styles.header}>
                        <Text style={styles.title}>{post.title}</Text>
                    </View>}
                    <View style={styles.info}>
                        <View style={styles.footer}>
                            <Text style={styles.title}>
                                {new Date(post.date).toLocaleDateString()}
                            </Text>
                            <TouchableOpacity onPress={changeColor}>
                                <MaterialIcons name="favorite" size={24} color={buttonColor}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </DoubleClick>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        overflow: "hidden",
        borderRadius: 10

    },
    header: {
        padding: 3,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: "center"
    },
    info: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",

    },
    image: {
        width: '100%',
        height: 200,
    },
    footer: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flexDirection: "row",
        justifyContent: "space-between",
        width: '100%',
        paddingBottom: 5,
        paddingHorizontal: 10,
        alignItems: "center"
    },
    title: {
        color: 'white'
    }
})

export default Post