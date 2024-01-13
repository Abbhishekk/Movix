
import HeroBanner from './heroBanner'

import "./style.scss"
import Trending from './Trending'
const Home = () => {
  return (
    <div className='homepage'>
       
      <HeroBanner />
      <Trending/>
      <div style={{height: 1000}}> 

      </div>

    </div>
  )
}

export default Home