import React from 'react'
import ReactDOM from 'react-dom'
import imagen from './images/js_logo.png'


class App extends React.Component {

    state={
        top:'',
        left:'',
        style:{
          //  transform:translate(this.state.top,this.state.left)}
            //  transform: translate(300px,90px);
            transform:`translate:(0px,0px)`
        }
    }

    handleMouseEnter = (e) =>
    {
        this.setState({
            top:(Math.random()*1500)+'px',
            left:(Math.random()*1500)+'px',
            style:{
            transform:`translate(${this.state.top},${this.state.left})`
            }
        })
        console.log(this.state.top)
        console.log(this.state.left)
    }


    handleMouseOver = (e) =>
    {
    
    }

    render(){

    return(
        <div className="container">
            <img src={imagen} alt="logo js" onMouseEnter={this.handleMouseEnter} onMouseOver={this.handleMouseOver} style={this.state.style}/>
        </div>
    )

    }

}



ReactDOM.render(<App/>, document.getElementById("root"))