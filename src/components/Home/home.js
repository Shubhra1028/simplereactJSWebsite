import React from 'react' 
import DashView from './dashview'
import Features from './features'
import Banner from './banner'

const Home = ()=>{
    return(
        <div>
            <DashView />
            <Features />
            <Banner />
        </div>
    )
} 

export default Home