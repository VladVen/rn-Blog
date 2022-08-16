import React from "react";
import {useSelector} from "react-redux";

import PostLIst from "../Components/PostLIst";


const BookmarkedScreen = ({navigation}) => {

    const booked = useSelector(state => state.post.bookedPosts)

    return(
        <PostLIst data={booked} navigation={navigation}/>
    )
}


export default BookmarkedScreen
