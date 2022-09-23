import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom'

import {Link as LinkMui} from "@mui/material";

const MyAppBar = ()=> {
    return (
            <AppBar position="static">
                <Toolbar>
                    <Box >
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>

                        <LinkMui sx={{m:1,color:'white'}}  component={Link} to='/'>Home</LinkMui>
                        <LinkMui sx={{m:1,color:'white'}} component={Link} to='news' >News</LinkMui>
                        <LinkMui sx={{m:1,color:'white'}} component={Link} to='top' >Top</LinkMui>
                    </Box>
                    <Button color="inherit" sx={{ml:'auto'}}>Вход</Button>
                </Toolbar>
            </AppBar>
    );
}
export default MyAppBar