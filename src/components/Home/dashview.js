import React, {Component} from 'react' 

class DashView extends Component{

    state={
        otherLinks: [
            'Websites', 'Blogs', 'Features', 'Pricing', 'News', 'Support'
        ],
        authLinks : [
            'Log In', 'Get Started'
        ]
    }

    returnList = (list)=>{
        return list.map((item)=>{
            return <li> {item} </li>
        })
    }

    render(){
        return(
            <div className="dashboard">
                <div className="topbar">
                    <h2>Dummy Me!</h2>
                    <ul className="navList ">
                        {this.returnList(this.state.otherLinks)}
                    </ul>
                    <div className="spacer" />
                    <ul className="navList ">
                        {this.returnList(this.state.authLinks)}
                    </ul>
                </div>
            </div>
        )
    }
}

export default DashView;