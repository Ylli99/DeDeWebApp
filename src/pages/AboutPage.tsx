import {Grid} from "@mui/material";
// import {useTheme} from "@mui/material/styles";
import * as React from "react";
// import useWindowSize from "../hooks/useWindowSize";

interface UserInfoFriend {
    name: string,
    email: string
}

export interface UserInfo {
    title: string,
    comments: string,
    email: string,
    completed: boolean,
    friends: UserInfoFriend[]
}

const AboutPage = () => {
    // const theme = useTheme()
    // const windowSize = useWindowSize()

    return <Grid container className={'Center'}>

    </Grid>

};

export default AboutPage;
