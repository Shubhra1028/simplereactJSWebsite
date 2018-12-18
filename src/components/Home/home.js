import React from 'react' 
import DashView from './dashview'
import Features from './features'
import Banner from './banner'
import Plansview from './plans'
import Faq from './faq'
import Trusted from './trusted'
import Footer from './footer'

const Home = ()=>{
    return(
        <div>
            <DashView />
            <Features />
            <Banner />
            <Plansview />
            <Faq />
            <Trusted />
            <Footer />
        </div>
    )
} 

export default Home