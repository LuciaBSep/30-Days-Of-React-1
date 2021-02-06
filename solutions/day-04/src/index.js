import React from 'react'
import ReactDOM from 'react-dom'
import css_logo from './images/css_logo.png'
import html_logo from './images/html_logo.png'
import js_logo from './images/js_logo.png'
import logo from './images/react_logo.png'
import foto from './images/asabeneh.jpg'


const Header=() => (
  <header>
    <h1>Front end Technologies</h1>
    <div className="images_logos">
      <img className="logos" src={html_logo} alt="logo html"></img>
      <img className="logos" src={css_logo} alt="logo css"></img>
      <img className="logos" src={js_logo} alt="logo js"></img>
      <img className="logos" src={logo} alt="logo react"></img>
    </div>
  </header>
)

const Imagen=(props) => (
  <img className={props.className} src={props.src} alt={props.alt}></img>
)


/* se usa asi:
<Imagen className="logos" src={css_logo} alt="logo css"/>
*/

const Boton=(props) => (
  <button type={props.type} className={props.className}>{props.text}</button>
)

/*El boton antes era: <button type="submit" className="Subscribe">Subscribe</button> */

const Main=()=>(
  <div className="main">
    <h2 id="hola">SUBSCRIBE</h2>
    <h3>Sign up with your email adress to receive news and updates.</h3>
    <form className="formulario">
      <input type="text" className="firstName" placeholder="First name"></input>
      <input type="text" className="lastName" placeholder="Last name"></input>
      <input type="text" className="email" placeholder="Email"></input>
      <Boton type="submit" className="subscribe" text="Subscribe"></Boton>
    </form>
  </div>
)





// Hexadecimal color generator
const hexaColor= () => {
  let arreglo="0123456789abcdef";
  let color=""

  for (let i=0;i<6;i++)
  {
    let elem=Math.floor(Math.random()*arreglo.length)
    color=color+arreglo[elem]
  }
  color="#"+color
  console.log(color)
  return color

}

let arreglo=[hexaColor(),hexaColor(),hexaColor(),hexaColor(),hexaColor()]

const lista=arreglo.map((elem)=><li key={elem} className={elem} id={elem} style={{background:elem}}>{elem}</li>) 



const HexaColor = () =>(
 /*<div>{hexaColor()}</div>*/
  <div className="hexa"> 
      <ul>{lista}</ul>
  </div>

)

const ListaNueva=()=>{
  const arreglo=["HTML","CSS","Sass","JS","React","Redux","Node","MongoDB","Python","Flask",
  "Django", "Pandas","Data Analysis","MYQL","GraphQL","D3.js","Docker","Git"]
  const lista_a_retornar=arreglo.map((elem)=><li key={elem}>{elem}</li>)
  return (
    <div className="skills">
      <h3>SKILLS</h3>
      <ul>{lista_a_retornar}</ul>
    </div>
  )
}

const Fecha=()=>{
  const fecha=new Date()
  return(
    <div>
    <small>Joined on {fecha.toLocaleDateString()}</small>
    </div>
  )
}


const CardUser=()=>(
  <div className="card">
    <img src={foto} alt="foto usuario"></img>
    <h2>Nombre del usuario</h2>
    <p>Profesion usuario, pais</p>
    <Fecha/>
  </div>
)




const App=()=>(
  <div>
    <Header/>
    <Main/>
    <HexaColor/>
    <CardUser/>
    <ListaNueva/>
  </div>
)
/*

var miHonda = { color: 'red', ruedas: 4, motor: { cilindros: 4, cantidad: 2.2 } };
var miCoche = [miHonda, 2, 'Buen estado', 'comprado 1997',"agrego","mas","para ver","que onda"];
var nuevoCoche = miCoche[2].slice(0, 3);

//  Muestra los valores de myCar, newCar y el color de myHonda.
console.log(nuevoCoche)
//{color: "red",ruedas:4,motor:{}}
//2
//"Buen estado"

console.log(nuevoCoche[1]) //2

*/

const rootElement = document.getElementById('root')
// we render the App component using the ReactDOM package
ReactDOM.render(<App />, rootElement)