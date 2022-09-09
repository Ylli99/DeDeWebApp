import CssBaseline from '@mui/material/CssBaseline';
import {RoutesSwitch} from '../router/Routes';
import React from 'react';
import {useTheme} from '@mui/material/styles';
import background from "../assets/images/background.jpg";
import {useAppDispatch} from "../store/store";
import {useSelector} from "react-redux";
import {RootState} from "../store/rootReducer";
import PersistentDrawerRight from '../components/app-bar/Drawer';

const MainPage = () => {
    const theme = useTheme();
    const dispatch = useAppDispatch();
    const {
        drawerOpen,
    } = useSelector((state: RootState) => state.app);

    return <div className={'App'}
                style={{
                    overflow: 'auto',
                    height: `calc('100%' - '4em')`,
                    backgroundImage: `url(${background})`,
                    background: 'no-repeat',
                    backgroundColor: theme.backgroundColor,
                    color: theme.textColor,
                }}>
        <CssBaseline/>
        <PersistentDrawerRight/>
        <RoutesSwitch/>
    </div>;

};

export default MainPage;
