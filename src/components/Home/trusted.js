import React, {Component} from 'react' 

class Trusted extends Component{

    componentDidMount(){
        this.handleScroll = this.handleScroll.bind(this)
        document.addEventListener("onwheel", this.handleScroll())
    }
    handleScroll = ()=>{
        var x = document.querySelector('.trusted')
        document.addEventListener("scroll", function() {
            var y = x.getBoundingClientRect()
            x.style.backgroundPositionY = - (y.y) + '%'
          })
    }


    render(){
        return(
                <div ref="trust" className="trusted" onScroll={this.returnBackgroundPosition} data-type="background" data-speed="2">
                    <div>
                    <h3>Trusted by some of the world's biggest brands and industries</h3>
                    <div className="btn white">Get Started</div>
                    </div>
                </div>
        )
    }
}

export default Trusted;