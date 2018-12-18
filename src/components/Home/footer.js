import React, {Component} from 'react' 

class Footer extends Component{

    state={
        footerLinks: ["Themes", "Features", "Blog", "Stats", "VIP", "Terms of Service", "Privacy Policy"]
    }

    returnList = (list)=>{
        return list.map((item, id)=>{
            return <li key={id}> {item} </li>
        })
    }

    render(){
        return(
                <div className="footer black">
                    <div className="topbar">
                        <ul className="navList ">
                            {this.returnList(this.state.footerLinks)}
                        </ul>
                        <div className="spacer" />
                    </div>
                </div>
        )
    }
}

export default Footer;