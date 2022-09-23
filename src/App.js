import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatch} from "react-redux";
import {useEffect} from "react";
import {loadPopular} from "./store/asyncActions/loadPopular";
import Header from "./components/Header";
import {router} from './router/router'
import {ThemeProvider} from "@mui/material";
import theme from "./theme";
import {loadTop} from "./store/asyncActions/loadTop";
import {BrowserRouter,
    Routes,
    Route} from 'react-router-dom'

function App() {
  const films = useSelector(state => state.film)
  const dispatch = useDispatch()

    useEffect(()=> dispatch(loadPopular)
    ,[])
    useEffect(()=> dispatch(loadTop),[])
    useEffect(()=>{
        console.log(films)
    },[films])
  return (
      <BrowserRouter>
          <ThemeProvider theme={theme}>
          <Header/>
          <Routes>
              {
                  router.map((rout)=>
                  {
                      const Component = <rout.component/>
                      return(
                          <Route
                              path={rout.path}
                              element={Component}
                              key={rout.path}
                          />)
                  })
              }


          </Routes>
          </ThemeProvider>
      </BrowserRouter>


  );
}

export default App;
