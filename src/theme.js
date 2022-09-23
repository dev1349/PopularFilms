import {createTheme} from "@mui/material";
const theme = createTheme({
    components: {
        MainTemplateStyled: {
            styleOverrides: {
                root: {
                    marginTop:'20px',
                    display: 'flex',
                    width:'1280px',
                    marginLeft:'auto',
                    marginRight:'auto',
                    alignItems:'flex-start',

                },
            },
        },
        SidebarTemplate:{
            styleOverrides: {
                root: {
                    flex:1,
                    height:'100vh',
                    background:'grey'
                },
            },
        },
        FeedTemplate:{
            styleOverrides: {
                root: {
                    flex:4,
                    height:'1700px',
                    paddingRight:'20px',
                    paddingLeft:'20px',

                },
            },
        },
        RightBarTemplate:{
            styleOverrides: {
                root: {
                    flex:1.5,
                    height:'1700px',
                    background:'blue',
                    padding:'30px',
                },
            },
        },
    },
});
export default theme