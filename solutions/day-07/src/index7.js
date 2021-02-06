import React from 'react'
import ReactDOM from 'react-dom'
import asabeneh from './images/asabeneh.jpg'



class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        const { 
            title,
            subtitle,
            author:{ firstName, lastName},
            date
        }= this.props.data


        return(
            <header>
                <div className="header-wrapper">
                    <h1>{this.props.data.welcome}</h1>
                    <h2>{title}</h2>
                    <h3>{subtitle}</h3>
                    <p>{firstName} {lastName}</p>
                    <small>{date}</small>
                </div>
            </header>
        )
    }
}

const Lista=({lista})=>
{
    const l=lista.map((elem)=><li key={elem}>{elem}</li>)
    return l
}



const Suma=()=>
(
    <div>
        <p>
            3+2=5
        </p>
    </div>
)

class Imagen extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div class="image-wrapper">
                <img src={this.props.src} alt={this.props.alt}></img>
            </div>
        )
    }
}


class Main extends React.Component {
    constructor(props) 
    {
        super(props)
    }

    render()
    {
        const arreglo=["HTML","CSS","Javascript"]
        return (
            <div class="main-wrapper">
                <h3>Prerequisite to get started <strong>react.js</strong></h3>
                <ul>
                    <Lista lista={arreglo}/>
                </ul>
                <Suma/> 
                <Imagen src={asabeneh} alt="Foto perfil"></Imagen>
            </div>
        )
    }
}



class Footer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div className="footer-wrapper">
                <p>Copyright 2020</p>
            </div>
        )
    }
}






class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const data = {
            welcome: 'Welcome to 30 Days Of React',
            title: 'Getting Started React',
            subtitle: 'JavaScript Library',
            author: {
              firstName: 'Asabeneh',
              lastName: 'Yetayeh',
            },
            date: 'Oct 7, 2020',
          }
        return (
            <div className="app">
                <Header data={data}/>
                <Main/>
                <Footer/>
            </div>
        )
    }
}



ReactDOM.render(<App />,document.getElementById("root"))