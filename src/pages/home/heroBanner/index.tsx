/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {useEffect, useState} from 'react'
import "./style.scss"
import {useNavigate} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux";
import useFetch from "../../../hooks/useFetch";
import { fetchData } from '../../../utils/api';
import { getAPIConfiguration } from '../../../store/homeSlice';

import Img from '../../../components/lazyLoadImage/Img';
import { ContentWrapper } from '../../../components';



const HeroBanner = () => {
  const {data, loading} = useFetch("/movie/upcoming");
  const [background, setBackground] = useState('');
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const {url} = useSelector((state:any) => state.home);

  useEffect(() => {
    const bg = url.backdrop +  data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  },[data])

  


  const handleChange = (event:any) => {
    if(event.key === 'Enter' && query.length > 0) {
      navigate(`/search/${query}`)
    }
    setQuery(event.target.value);
  }

  return (
    <div className="heroBanner">
      {!loading &&  <div className="backdrop-img">
        <Img src={background}  />
      </div>}

    <div className="opacity-layer">

    </div>


    <ContentWrapper>
      
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">
            Millions of movies, TV shows and people to discover.
            Explore now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              value={query}
              onKeyUp={handleChange}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for a movie or tv show...."
            />
            <button  className='text-white gap-2 m-5' > Search</button>

          </div>
        </div>
     

    </ContentWrapper>

    </div>
  )
}

export default HeroBanner