import React from 'react'
import ReactDOM from 'react-dom'
import {tenHighestPopulation} from './data/ten_most_highest_populations.js'
const total=7693165599

/*console.log(tenHighestPopulation)*/

const numeros=[
    [0,""],[1,""],[2,""],[3,""],[4,""],[5,""],
    [6,""],[7,""],[8,""],[9,""],[10,""],[11,""],[12,""],
    [13,""],[14,""],[15,""],[16,""],[17,""],[18,""],[19,""],
    [20,""],[21,""],[22,""],[23,""],[24,""],[25,""],[26,""],
    [27,""],[28,""],[29,""],[30,""],[31,""]
]



function esPrimo(a)
{
    let esprimo=true
    let i=2

    while (esprimo && i<a)
    {
        if (a%i===0)
        {
            esprimo=false
        }
        else
            i=i+1
    }
    return esprimo
}

function esPar(a)
{
    return (a%2===0)
}


const Numeros=({numeros})=>{
    const listaNumeros=numeros.map((numero)=><Numero key={numero} numero={numero}/>)
    return <div class="listaNumeros">
                <ul class="numeros">
                {listaNumeros}
                </ul>
            </div>
}


const Numero=({numero: [num,color]})=>
{
    if (num===0)
    {
        color="green"
    }
    else{
    if (esPrimo(num)===true)
        {color="red"
        }
    else
    {
        if (esPar(num))
        {color="green"}
        else
        {color="yellow"}
    }
    }
    return(
        <li style={{background:color}}>
           <div class="numerosTabla"><strong>{num}</strong></div> 
        </li>
    )
}



const colorHexa=()=>{
    let letras='0123456789abcdef'
    let color=''

    for (let i=0;i<6;i++)
    {
        //Math random devuelve un numero menor a 1
        let c=Math.floor(Math.random()*letras.length)
        color=color+letras[c]
    }
    color='#'+color
    return color
}


const arregloHexa=()=>{
    let arreglo=[]
    for (let i=0;i<32;i++)
    {
        arreglo[i]=colorHexa()
    }
    return arreglo
}


const ColoresHexa=()=>{
    const arregloH=arregloHexa()
    const listaHexa=arregloH.map((elem)=><ColorHexa key={elem} color={elem}/>)
    const actualizar=()=>
    {
        alert("Se van a actualizar los colores")
        ReactDOM.render(<App />, document.getElementById("root"))
    }


    return(
        <div className="coloresHexa">
            <ul>
                {listaHexa}
                <tr> <Button text="Actualizar colores" onClick={actualizar}></Button></tr>
            </ul>
            <div class="boton">
            </div>
        </div>
    )
}


const ColorHexa=({color})=>(
        <li style={{background:color}}>
           <div className="nombreColores"><strong>{color}</strong></div> 
        </li>
    )



const porcentaje=(numero)=>{
    return numero*100/total
}

const Paises=({pais: {country,population}})=>{
    return(
        <tr>
            <td>{country}</td>
            <td>
                <div id="progressBar">
                    <div id="progressBarFull" style={{width:porcentaje(population)+"%"}}></div>
                </div>
            </td>
            <td>{population}</td>
        </tr>
    )
}



const Tabla=()=>{
    const lista=tenHighestPopulation.map((elem)=><Paises key={elem.country} pais={elem}/>)
    return (<div class="tablaPaises">
            <h1>30 Days of React</h1>
            <h2>World population</h2>
            <small>Ten most populated countries</small>
                <table>
                    {lista}
                </table>
            </div>)
}


const Button = (props) => <button onClick={props.onClick}>{props.text}</button>


const App=()=>
{

    const hola=()=>{
        alert("hola")
    }
    return(
    <div>
        <h1 className="titulo">Tabla numeros</h1>
        <Numeros numeros={numeros}/>
        <div class="divisor"></div>
        <h1 className="titulo">Colores Hexa</h1>
        <ColoresHexa/>
        <div class="divisor"></div>
        <Tabla/>
        <Button onClick={hola} text="Tocar aca"/>
    </div>
)
}

ReactDOM.render(<App />, document.getElementById("root"))