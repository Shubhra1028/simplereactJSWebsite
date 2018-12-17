import React, {Component} from 'react' 

class Features extends Component{

    state={
        features: [
            {
                imgurl: 'https://dummyimage.com/400x400/eeeeee/ffffff',
                title: 'Easy to use                ',
                content: 'Creating and managing your website is simple with WordPress.com’s powerful platform. Get started in minutes and make changes to your site easily.'
            },
            {
                imgurl: 'https://dummyimage.com/400x400/eeeeee/ffffff',
                title: 'Your own domain name',
                content: 'Register a unique .com, .net, .org, or .me domain and start using it in seconds. You can also map your existing domain name to WordPress.com in a few easy steps.'
            },
            {
                imgurl: 'https://dummyimage.com/400x400/eeeeee/ffffff',
                title: 'Outstanding design',
                content: 'Find a unique style for your site: WordPress.com features hundreds of beautiful themes.'
            },
            {
                imgurl: 'https://dummyimage.com/400x400/eeeeee/ffffff',
                title: 'Mobile ready',
                content: 'With our responsive and mobile themes, we make sure your site looks good on any device. Update your website on the go with mobile apps for iOS and Android.'
            },
            {
                imgurl: 'https://dummyimage.com/400x400/eeeeee/ffffff',
                title: 'The best support',
                content: 'Our Happiness Engineers work 24*7 through live chat, email, support pages, and forums to answer any questions you have.'
            },
            {
                imgurl: 'https://dummyimage.com/400x400/eeeeee/ffffff',
                title: 'Powerful statistics',
                content: 'Keep your finger on the pulse and learn more about your readers. See where they’re from and how they found you, with colourful maps and graphs that beautifully present your stats.'
            }
        ]
    }

    returnList = (list)=>{
        return list.map((item, id)=>{
            return (
                <div key={id}>
                    <img src={item.imgurl} alt={item.title} width="100%" />
                    <p className="featureTitle title"> {item.title} </p>
                    <p className="featureContent"> {item.content} </p>
                </div>
            )
        })
    }

    render(){
        return(
                <div className="features">
                    <h1 className="title">Features you'll learn</h1>
                    <div className="featuresGrid">
                        {this.returnList(this.state.features)}
                    </div>
                    <div className="myBlueBtn btn white-text">Get Started</div>
                </div>
        )
    }
}

export default Features;