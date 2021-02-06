import React from 'react';
import ReactDOM from 'react-dom';
import logos from './images/frontend_technologies.png'
import foto from './images/react_logo.png'

const rootElement=document.getElementById("root")

const header=(
  <header>
    <img id="logo" src={logos} alt="logos"></img>
  </header>
)

const main=(
  <div className="main">
    <h1>SUBSCRIBE</h1>
    <p>Sign up with your email adress to receive news and updates.</p>
    <table>
      <tbody>
      <tr>
        <td>
          <input type="text" id="firstName" placeholder="Full name"></input>
        </td>
        <td>
          <input type="text" id="lastName" placeholder="Last name"></input>
        </td>
        <td>
          <input type="text" id="email" placeholder="Email"></input>
        </td>
      </tr>
      </tbody>
    </table>
    <div className="boton">
    <button type="submit" id="suscribe" name="Suscribe">Suscribe</button>
    </div>
  </div>
)


const arreglo=["HTML","CSS","Sass","JS","React","Redux","Node","MongoDB","Python","Flask",
"Django", "Pandas","Data Analysis","MYQL","GraphQL","D3.js","Docker","Git"]


const lista=arreglo.map((element)=><li key={element}>{element}</li>)


const date=new Date();

console.log(date.toLocaleDateString())

const tiempo=(
  <p className="tiempo">Joined on {date.toLocaleDateString()}</p>
)

const panel=(
  <div className="panel">
    <div className="perfil">
      <img id="foto" src={foto} alt="foto de usuario"></img>
      <h2>Nombre del usuario</h2>
      <p>Profesion del usuario, pais</p>
    </div>
    <h3>Habilidades</h3>
    <ul className="list" type="none">
    {lista}
    </ul>
    {tiempo}
  </div>

)



 const app=(
   <div className="container">
    {header}
    {main}
    {panel}
   </div>
 )





ReactDOM.render(app,rootElement)