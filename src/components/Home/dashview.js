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
        return list.map((item, id)=>{
            return <li key={id}> {item} </li>
        })
    }

    render(){
        return(
                <div className="dashboard">
                    <div className="topbar">
                        <p className="logo">DummyMe!</p>
                        <ul className="navList ">
                            {this.returnList(this.state.otherLinks)}
                        </ul>
                        <div className="spacer" />
                        <ul className="navList ">
                            {this.returnList(this.state.authLinks)}
                        </ul>
                    </div>
                    <div className="motto">
                        <h1 className="white-text">Easily create your amazing dummy</h1>
                        <p>Dummy.com brings the power of building beautiful, secure, mobile and SEO friendly websites in few simple steps.</p>
                        <button className="waves-effect waves-light btn blue white-text">get started</button>
                        <button className="waves-effect waves-light btn white">see plans</button>
                    </div>
                    <div className="dashBottom blue">
                        <span className="waves-effect waves-light btn yellow white-text">New</span>
                        <p className="white-text">Business plans allows you to sell online with access to thousands of plugins and themes!</p>
                    </div>
                </div>
        )
    }
}

export default DashView;