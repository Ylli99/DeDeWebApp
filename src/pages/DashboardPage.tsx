import * as React from 'react';
import {Grid, Paper} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import useWindowSize from "../hooks/useWindowSize";

export default function DashboardPage() {
    const theme = useTheme()
    const windowSize = useWindowSize()

    return (
        <Grid container className={'Center'} sx={{justifyContent: 'space-evenly'}}>
            <Paper elevation={3} sx={{
                backgroundColor: theme.palette.primary.main,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                width: windowSize.innerWidth < 500 ? '20em' : '30em',
            }}>
            </Paper>
        </Grid>
    );
}
