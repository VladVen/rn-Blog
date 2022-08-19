import {FlatList, Linking, StyleSheet, Text, View} from "react-native";
import Post from "./Post";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import AppHeaderButton from "./CustomComponent/AppHeaderButton";
import React, {useEffect} from "react";
import Theme from "../theme";


const PostList = ({data, navigation}) => {
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
    const goToPost = (post) => {
        navigation.navigate('Post', {postId: post.id})
    }

    if (!data.length) {
        return <View style={styles.noDataContainer} >
            <Text style={styles.noData}>
                Your posts will be here, go to
                <Text style={{color: Theme.MAIN_COLOR, fontFamily: 'OpenSans-Bold'}}
                      onPress={() => navigation.navigate('CreateScreen')}>
                    {''} Create
                </Text> and make some one
            </Text>
        </View>
    }

    return (
        <View style={styles.container}>
            <FlatList data={data}
                      keyExtractor={item => item.id}
                      renderItem={({item}) => (<Post post={item} onOpen={goToPost}/>)}
                      inverted
            />

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingRight: 10,
        paddingLeft: 10
    },
    noDataContainer: {
        flex: 1,
        alignItems:"center",
        justifyContent: "center"
    },
    noData: {
        fontFamily: 'OpenSans-Italic',
        fontSize: 20
    }
})

export default PostList