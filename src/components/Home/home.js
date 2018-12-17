import React from 'react' 
import DashView from './dashview'
import Features from './features'
import Banner from './banner'
import Plansview from './plans'
import Faq from './faq'

const Home = ()=>{
    return(
        <div>
            <DashView />
            <Features />
            <Banner />
            <Plansview />
            <Faq />
        </div>
    )
} 

export default Home