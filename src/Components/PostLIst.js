import {FlatList, StyleSheet, View} from "react-native";
import Post from "./Post";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import AppHeaderButton from "./CustomComponent/AppHeaderButton";
import {useEffect} from "react";


const PostLIst = ({data, navigation}) => {
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
    return(
        <View style={styles.container}>
            <FlatList data={data}
                      keyExtractor={item => item.id}
                      renderItem={({item}) => (<Post post={item} onOpen={goToPost} />)} />

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingRight: 10,
        paddingLeft: 10
    }
})

export default PostLIst