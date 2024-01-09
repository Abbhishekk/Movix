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

  useEffect(() => {
    fetch()
    
  },[])
  const fetch = () => fetchData('/movie/popular',{})
                      .then((data) =>{
                        console.log(data)
                        dispatch(getAPIConfiguration(data))
                      } );
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
