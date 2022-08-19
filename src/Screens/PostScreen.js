import React, {useCallback, useEffect} from "react";
import {Alert, Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Theme from "../theme";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import AppHeaderButton from "../Components/CustomComponent/AppHeaderButton";
import {useDispatch, useSelector} from "react-redux";
import {delPost, toggleBooked} from "../Store/reducers/post";
import {useState} from "react";
import ImageModal from "../Components/ImageModal";


const PostScreen = ({route, navigation}) => {
    const [modal, setModal] = useState(false)
    const dispatch = useDispatch()
    const {postId} = route.params;

    const post = useSelector(state => state.post.posts.find(item => item.id === postId))
    const booked = useSelector(state => state.post.bookedPosts.some(item => item.id === postId))

    const buttonColor = booked ? 'yellow' : 'white'

    const changeBooked = () => {
        dispatch(toggleBooked(post))
    }

    useEffect(() => {
        navigation.setOptions({
            title: "Posted " + new Date(post.date).toLocaleDateString(),
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={AppHeaderButton}>
                    <Item title={'bookmark'}
                          iconName={'star'}
                          color={buttonColor}
                          onPress={changeBooked}
                    />
                </HeaderButtons>
            )
        })

    }, [changeBooked])

    const removeHandler = () => {
        Alert.alert(
            "",
            `Are you sure to delete this post "${post.title ? post.title : ''}" ?`,
            [
                {
                    text: "Cancel",
                    style: "negative",
                },
                {
                    text: "Confirm",
                    onPress: () => {
                        navigation.goBack()
                        dispatch(delPost(post.id))
                    },
                    style: "positive",
                },

            ],
            {
                cancelable: true,
            }
        )
    }


    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity onPress={() => setModal(true)}>
                <Image source={{uri: post.img}} style={styles.image}/>
            </TouchableOpacity>
            <ImageModal visible={modal} img={post.img} goBack={setModal}/>
            <View style={styles.textWrapp}>
                <Text style={styles.title}>
                    {post.text}
                </Text>
            </View>
            <View style={styles.buttons}>
                <Button title={'Delete'} color={Theme.DANGER_COLOR} onPress={removeHandler}/>
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
