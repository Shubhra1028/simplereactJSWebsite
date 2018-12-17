import React, {Component} from 'react' 

class Plansview extends Component{

    state={
        plans: [
            {
                title: 'Personal',
                price:'200',
                subtitle: 'Best for Personal Use:',
                border: '#f0b849',
                content: 'Boost your website with a custom domain name, and remove all WordPress.com advertising. Get access to high quality email and live chat support.',
                list: ["Free Domain for One Year", "Jetpack Essential Features", "Email & Live Chat Support", "Dozens of Free Themes", "Basic Design Customization", "6GB Storage Space", "Remove WordPress.com Ads"]
            },
            {
                title: 'Premium',
                price:'350',
                subtitle: 'Best for Entrepreneurs & Freelancers:',
                border: '#4ab866',
                content: 'Build a unique website with advanced design tools, CSS editing, lots of space for audio and video, and the ability to monetize your site with ads.',
                list: ["Free Domain for One Year", "Jetpack Essential Features", "Email & Live Chat Support", "Unlimited Premium Themes", "Advanced Design Customization", "13GB Storage Space", "Remove WordPress.com Ads", "Simple Payments", "Monetize your site", "VideoPress support"]
            },
            {
                title: 'Business',
                price:'800',
                subtitle: 'Best for Small Business:',
                border: '#855da6',
                content: 'Power your business website with access to custom WordPress plugins and themes, real‑time concierge support, Google Analytics, and unlimited storage.',
                list: ["Free Domain for One Year", "Jetpack Essential Features", "Email & Live Chat Support", "Unlimited Premium Themes", "Advanced Design Customization", "Unlimited Storage Space", "Remove WordPress.com Ads", "Simple Payments", "Monetize your site", "VideoPress support", "Jetpack Search", "Attend live courses", "SEO Tools", "Install Plugins NEW", "Upload themes NEW", "Google Analytics Integration", "Remove WordPress.com Branding"]
            }
        ]

    }

    returnList = (list)=>{
        return list.map((item)=>{
            return (
             <li key={item} className="collection-item flexList"> 
                <span> <i className="material-icons blue-text">check</i> </span>
                <span className="planDet">{item}</span>
                <span><i className="material-icons">info</i></span>
             </li>
            )
        })
    }

    renderPlans = ()=>{
        return this.state.plans.map((item)=>{
            const {border} = item
            return(
                <ul className="collection" key={item.title}>
                        <li className="collection-item avatar white" style={{ 'borderBottomColor': border }}>
                            <img src="https://dummyimage.com/50x50/000/fff" alt="" className="circle" />
                            <span className="title"> {item.title} </span>
                            <p className="price">${item.price}</p>
                            <p className="planTime">per month, billed yearly</p>
                        </li>
                        <li className="collection-item">
                            <p className="subtitle">{item.subtitle}</p>
                            <p className="content">{item.content}</p>
                            <div className="myBlueBtn waves-effect waves-light white-text">Start with {item.title}</div>
                        </li>
                            {this.returnList(item.list)}
                        <li className="atBottom">
                            <div className="myBlueBtn waves-effect waves-light white-text">Start with {item.title}</div>
                        </li>
                    </ul>
            )
        })
    }

    render(){
        return(
                <div className="plans">
                    <h1>Upgrade your website to unlock more power</h1>
                    <div className="plansGrid">
                        {this.renderPlans()}
                    </div>
                </div>
        )
    }
}

export default Plansview;