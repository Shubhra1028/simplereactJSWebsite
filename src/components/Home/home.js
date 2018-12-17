import React from 'react' 
import DashView from './dashview'
import Features from './features'
import Banner from './banner'
import Plansview from './plans'

const Home = ()=>{
    return(
        <div>
            <DashView />
            <Features />
            <Banner />
            <Plansview />
        </div>
    )
} 

export default Home