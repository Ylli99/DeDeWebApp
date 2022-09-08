import * as React from 'react';
import {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {setTheme} from "../../store/appReducer";
import {useAppDispatch} from "../../store/store";
import {useSelector} from "react-redux";
import {RootState} from "../../store/rootReducer";
import {Dialog, Divider, Grid} from "@mui/material";
import {useTheme} from "@mui/material/styles";

const ThemeMenuList = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const dispatch = useAppDispatch();
    const [selectedTheme, setSelectedTheme] = useState<string>("lightTheme")
    const {theme} = useSelector((state: RootState) => state.app);
    const themeObj = useTheme()

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        if (selectedTheme !== theme) {
            handleClose()
            dispatch(setTheme(selectedTheme))
        }
    }, [selectedTheme])

    return (
        <div>
            <Button
                id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Themes
            </Button>
            <Dialog open={open} onClose={() => setAnchorEl(null)}>
                <Grid
                      sx={{
                          width: '30em',
                          padding: '0.2em',
                          backgroundColor: themeObj.palette.primary.main,
                          color: themeObj.palette.secondary.main,
                          flexDirection: 'column'
                      }}
                      className={'Center'}
                >
                    <MenuItem selected={selectedTheme === 'lightTheme'}
                              onClick={() => setSelectedTheme('lightTheme')}
                    >
                        Light Theme
                    </MenuItem>
                    <Divider/>
                    <MenuItem selected={selectedTheme === 'darkTheme'}
                              onClick={() => setSelectedTheme('darkTheme')}>
                        Dark Theme
                    </MenuItem>
                    <Divider/>

                    <MenuItem selected={selectedTheme === 'pinkLightTheme'}
                              onClick={() => setSelectedTheme('pinkLightTheme')}>
                        Pink Light Theme
                    </MenuItem>
                    <Divider/>
                    <MenuItem selected={selectedTheme === 'pinkDarkTheme'}
                              onClick={() => setSelectedTheme('pinkDarkTheme')}>
                        Pink Dark Theme
                    </MenuItem>
                    <Divider/>
                    <MenuItem selected={selectedTheme === 'businessLightTheme'}
                              onClick={() => setSelectedTheme('businessLightTheme')}>
                        BS Light Theme
                    </MenuItem>
                    <Divider/>

                    <MenuItem selected={selectedTheme === 'businessDarkTheme'}
                              onClick={() => setSelectedTheme('businessDarkTheme')}>
                        BS Dark Theme
                    </MenuItem>
                </Grid>
            </Dialog>
        </div>
    );
}

export default ThemeMenuList
