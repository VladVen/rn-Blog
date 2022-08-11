import React, {useEffect} from "react";
import {DATA} from "../data";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import AppHeaderButton from "../Components/CustomComponent/AppHeaderButton";
import PostLIst from "../Components/PostLIst";


const MainScreen = ({navigation}) => {

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={AppHeaderButton}>
                    <Item title={'Take Photo'}
                          iconName={'ios-camera'}
                          onPress={() => navigation.navigate('About App')}
                    />
                </HeaderButtons>
            )
        })
    }, [])



    return(
        <PostLIst data={DATA} navigation={navigation}/>
    )
}



export default MainScreen
