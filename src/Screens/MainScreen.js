import React, {useEffect} from "react";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import AppHeaderButton from "../Components/CustomComponent/AppHeaderButton";
import PostLIst from "../Components/PostLIst";
import {useDispatch, useSelector} from "react-redux";
import {getPost} from "../Store/reducers/post";


const MainScreen = ({navigation}) => {

    const dispatch = useDispatch()

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
        <PostLIst data={Data} navigation={navigation}/>
    )
}



export default MainScreen
