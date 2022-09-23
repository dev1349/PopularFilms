import {List,ListItem,ListItemButton,ListItemText,Box} from '@mui/material'
const Sidebar = () =>{
    return(
        <Box sx={{position:'fixed'}}>
            <List>
                <ListItem>
                    <ListItemButton>
                        <ListItemText primary='Сериалы'/>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemText primary='Ужасы'/>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemText primary='Триллеры'/>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemText primary='Комедии'/>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemText primary='Зарубежные'/>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )
}
export default Sidebar