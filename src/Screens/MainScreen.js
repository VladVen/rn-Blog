import React, {useEffect} from "react";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import AppHeaderButton from "../Components/CustomComponent/AppHeaderButton";
import PostList from "../Components/PostLIst";
import {useDispatch, useSelector} from "react-redux";
import {getPost} from "../Store/reducers/post";
import {ActivityIndicator, StyleSheet, View} from "react-native";
import Theme from "../theme";


const MainScreen = ({navigation}) => {

    const dispatch = useDispatch()
    const {loading} = useSelector(state=> state.post.loading)

    if(loading) {
        return <View style={styles.preloader}>
            <ActivityIndicator color={Theme.MAIN_COLOR} size={'large'}/>
        </View>
    }

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={AppHeaderButton}>
                    <Item title={'Take Photo'}
                          iconName={'ios-camera'}
                          onPress={() => navigation.navigate('CreateScreen')}
                    />
                </HeaderButtons>
            )
        })
        dispatch(getPost())
    }, [])

    const Data = useSelector(state => state.post.posts)
    return(
        <PostList data={Data} navigation={navigation}/>
    )
}

const styles = StyleSheet.create({
    preloader: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default MainScreen
