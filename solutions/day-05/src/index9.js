
import React from 'react'
import ReactDOM from 'react-dom'
import jsLogo from './images/js_logo.png'

const estacion = (date)=>
{
    let est=""
    //let mes=date.getMonth()
    let mes=10
    let dia=date.getDay()

    if (dia>20)
    {
        switch (mes)
        {
            case 11: case 0: case 1:
                est="verano"
                break
            case 2: case 3: case 4:
                est="otoño"
                break
            case 5: case 6: case 7:
                est="invierno"
                break
            case 8: case 9: case 10:
                est="primavera"
                break
            default:
                est="error"
        }
    }
    else
    {
        switch(mes)
        {
            case 0: case 1: case 2:
                est="verano"
                break
            case 3: case 4: case 5:
                est="otoño"
                break
            case 6: case 7: case 8:
                est="invierno"
                break
            case 9: case 10: case 11:
                est="primavera"
                break
            default:
                est="error"
        }
    }
    return est
}


const horaDia=(date)=>{
    let h=''
    let hora=date.getHours()
    switch (hora)
    {
        case 21: case 22: case 23: case 24: case 1: case 2: case 3: case 4: case 5: case 6:
            h="night"
            break
        case 7: case 8: case 9: case 10:
            h="morning"
            break
        case 11: case 12: case 13: case 14:
            h="noon"
            break
        case 15: case 16: case 17: case 18: case 19: case 20:
            h="evening"
            break
        default: 
            h="error"
    }
    return h
}



class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        const{
            title,
            subtitle,
            author: { firstName, lastName },
        }=this.props.data
    return(
        <div className="header-wrapper">
            <header>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <p>{firstName} {lastName}</p>
                <small>{this.props.date.getFullYear()}</small>
            </header>
        </div>
    )
    }
}

const color=(est)=>
{
    let hexa=''
    if (est==="verano")
        hexa='#F84924'
    if (est==="invierno")
        hexa='#4FCEC3'
    if (est==="primavera")
        hexa='#A027C4'
    if (est==="otoño")
        hexa='#E9900F'

    return hexa

}


const colorHora=(hora)=>
{
    let hexa=''
    if (hora==="morning")
        hexa='#E2FF00'
    if (hora==="noon")
        hexa='#32D722'
    if (hora==="evening")
        hexa='#22B7D7'
    if (hora==="night")
        hexa='#08046F'

    return hexa

}


class App extends React.Component {

    state = {
        //styles:{backgroundColor:color(estacion(new Date()))},
        styles:{backgroundColor:colorHora(horaDia(new Date()))}
    }



    render()
    {
        const data={
            title:"Pagina web de prueba",
            subtitle:"Es para probar el cambio en el color del fondo",
            author: {firstName:"Lucia", lastName:"Sepulveda"},
        }

        console.log(this.state.styles.backgroundColor)

        const date=new Date()

    //    if (this.state.estacion==="verano")
     //       this.setState({style:{backgroundColor: '#F84924'}})
        

        return(
            <div className="App" style={this.state.styles}>
                <Header data={data} date={date}/>
                <p>{estacion}</p>
            </div>
        )
    }
}

function carga(){
    alert("Se esta cargando la pagina")
    /*
    return(
        <div>
            <h1>Hola</h1>
            <img src={jsLogo} alt="logo js"></img>
        </div>
    )
    */
}




const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)







