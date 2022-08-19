import React, {useEffect, useRef, useState} from "react";
import {
    Button,
    Image,
    Keyboard,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View
} from "react-native";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import AppHeaderButton from "../Components/CustomComponent/AppHeaderButton";
import Theme from "../theme";
import {useDispatch} from "react-redux";
import {addPost} from "../Store/reducers/post";
import PhotoPicker from "../Components/CustomComponent/PhotoPicker";


const CreateScreen = ({navigation}) => {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const dispatch = useDispatch()
    const imageRef = useRef()

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


    const createHandler = () => {
        dispatch(addPost({
            title, text, img: imageRef.current, date: new Date().toJSON()
        }))
        setTitle('')
        setText('')
        navigation.navigate('Main')
    }
    const PhotoHandler = uri => {
        imageRef.current = uri
    }
    return (
        <ScrollView>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.container}>
                    <Text style={styles.title}>
                        Write your post
                    </Text>
                    <View>
                        <TextInput style={styles.textArea} placeholder={'Enter Title'}
                                   value={title} onChangeText={setTitle}
                        />
                        <TextInput style={styles.textArea} placeholder={'Enter your post'}
                                   value={text} onChangeText={setText}
                                   multiline
                        />
                    </View>
                    <PhotoPicker onPick={PhotoHandler}/>
                    <Button title={'Create post'} color={Theme.MAIN_COLOR}
                            onPress={createHandler}
                            disabled={!text || !imageRef.current}
                    />
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    title: {
        fontSize: 20,
        fontFamily: 'OpenSans-Italic',
        alignItems: "center",
        marginHorizontal: 10,
        marginBottom: 10
    },
    textArea: {
        padding: 10,
        marginBottom: 10,

    }
})

export default CreateScreen
