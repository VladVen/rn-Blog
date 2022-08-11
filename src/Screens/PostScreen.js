import React, {useEffect} from "react";
import {Alert, Button, Image, ScrollView, StyleSheet, Text, View} from "react-native";
import {DATA} from "../data";
import Theme from "../theme";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import AppHeaderButton from "../Components/CustomComponent/AppHeaderButton";


const PostScreen = ({route, navigation}) => {
    const {postId} = route.params;

    const post = DATA.find(item => item.id === postId)


    useEffect(() => {
        navigation.setOptions({
            title: "Posted " + new Date(post.date).toLocaleDateString(),
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={AppHeaderButton}>
                    <Item title={'bookmark'}
                          iconName={'star'}
                          color={post.booked &&'yellow'}
                          onPress={() => console.log('Pressed')}
                    />
                </HeaderButtons>
            )
        })

    }, [])

    const removeHandler = () => {
        Alert.alert(
            "",
            `Are you sure to delete this post "${post.title ? post.title: ''}" ?`,
            [
                {
                    text: "Cancel",
                    style: "negative",
                },
                {
                    text: "Confirm",
                    onPress: () => {
                        // navigation.goBack()
                        // return DATA.filter(item => item.id !== post.id)
                    },
                    style: "positive",
                },

            ],
            {
                cancelable: true,
            }
        )
    }


    return(
        <ScrollView style={styles.container}>
          <Image source={{uri: post.img}} style={styles.image}/>
            <View style={styles.textWrapp}>
                <Text style={styles.title}>
                    {post.text}
                </Text>
            </View>
            <View style={styles.buttons}>
                <Button title={'Delete'} color={Theme.DANGER_COLOR}  onPress={removeHandler}/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    textWrapp: {
        padding: 10
    },
    title: {
        fontFamily: 'OpenSans-Italic'
    },
    image: {
        width: "100%",
        height: 200
    },
    buttons: {
        width: '100%',
        justifyContent: "center"
    }
})

export default PostScreen
