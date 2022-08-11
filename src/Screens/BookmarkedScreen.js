import React from "react";
import {DATA} from "../data";

import PostLIst from "../Components/PostLIst";


const BookmarkedScreen = ({navigation}) => {

    const booked = DATA.filter(item => item.booked === true)

    return(
        <PostLIst data={booked} navigation={navigation}/>
    )
}


export default BookmarkedScreen
