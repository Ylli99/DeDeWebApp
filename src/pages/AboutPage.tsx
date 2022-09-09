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
<<<<<<< HEAD

=======
        <Paper
            className={'Center'}
            sx={{
                backgroundColor: theme.palette.secondary.main,
                color: theme.textColor,
                flexDirection: 'column',
                flex: 1,
                maxWidth: windowSize.innerWidth >= 500 ? '40em' : '20em',
                padding: '1.5em',
                userSelect: 'none',
            }}>

        </Paper>
>>>>>>> main
    </Grid>

};

export default AboutPage;
