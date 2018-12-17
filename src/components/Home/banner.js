import React from 'react' 

const Banner = ()=> {
        return(
                <div className="banner">
                    <div className="bannerGrid">
                        <div>
                            <h2 className="white-text">Create Anything</h2>
                            <p>WordPress.com allows you to build any kind of site you want: business site, blog, portfolio, the sky is the limit!</p>
                            <div className="myBlueBtn btn white-text">Get Started</div>
                        </div>
                        <div>
                            <img src='https://dummyimage.com/300x300/eeeeee/ffffff' alt="" width="80%" />
                        </div>
                    </div>
                </div>
        )
}

export default Banner;