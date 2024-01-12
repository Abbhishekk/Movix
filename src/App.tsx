/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import './App.css'
import { useEffect } from 'react'
import { fetchData } from './utils/api'
import { useSelector, useDispatch } from 'react-redux'
import { getAPIConfiguration } from './store/homeSlice'

import { BrowserRouter, Routes, Route} from 'react-router-dom'

import {ErrorPage, Details, Explore, Home, SearchResult} from "./pages"
import { Header , Footer } from './components'


const App = () => {
  const dispatch = useDispatch();
  const {url} = useSelector((state:any) => state.home);
console.log(url);
  useEffect(() => {
    fetchAPIConfig()
    
  },[])
  const fetchAPIConfig = () =>{
    fetchData("/configuration",{}).then((res:any) =>{
      console.log(res);
      const url = {
        backdrop : res.images.secure_base_url + "original",
        poster : res.images.secure_base_url + "original",
        profile : res.images.secure_base_url + "original",

      }
      dispatch(getAPIConfiguration(url));
    })
  }
  return (
    <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:mediaType/:id' element={<Details />} />
          <Route path='/search/:query' element={<SearchResult />} />
          <Route path='/explore/:mediaType' element={<Explore />} />
          <Route path='*' element={<ErrorPage />}  />

        </Routes>
        {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
