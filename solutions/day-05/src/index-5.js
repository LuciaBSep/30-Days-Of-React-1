import React from 'react'
import ReactDOM from 'react-dom'
import asabenehImage from './images/asabeneh.jpg'
import css_logo from './images/css_logo.png'
import html_logo from './images/html_logo.png'
import js_logo from './images/js_logo.png'
import react_logo from './images/react_logo.png'

// Fuction to show month date year

const showDate=(time)=>
{
  const months=[
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
  ]

  //slice agarra las primeras tres letras de cada mes
  const month=months[time.getMonth()].slice(0,3)
  const year=time.getFullYear()
  const day=time.getDate()

  return `${day}/${month}/${year}`
}


const UserCard=(props)=>
(
    <div className="user-card">
        <img src={props.image.src} alt={props.image.alt}></img>
        <h2>{props.name}</h2>
        <p>{props.profesion}</p>
        <Skills titulo="Skills"/>
    </div>
)




const Skills=(props) => 
(
    <div className="skills">
        <h2>{props.titulo}</h2>
        <ul>
            {props.lista}
        </ul>
    </div>
)


const Fecha=(props) =>
(
    <div className="fecha">
        <p>showDate(props.fecha)</p>
    </div>
)


const App = () => {
    const imagenPerfil = {
        src:react_logo,
        alt:"Imagen de perfil"
    }
  
    return (
        <div className="app">
        <UserCard name="Nombre usuario" image={imagenPerfil} 
        profesion="Profesion del usuario, pais"/>
    </div>
    )
  }

ReactDOM.render(<App/>, document.getElementById("root"))