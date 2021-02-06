
import React from 'react'
import ReactDOM from 'react-dom'


const estacion = (date)=>
{
    let est=""
    let mes=date.getMonth()
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



/*
class Header extends React.Component {
    render() {
      console.log(this.props.data)
      const {
        title,
        subtitle,
        author: { firstName, lastName },
        date,
      } = this.props.data
  
      return (
        <header>
          <div className='header-wrapper'>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <p>
              {firstName} {lastName}
            </p>
            <small>{date}</small>
          </div>
        </header>
      )
    }
  }


class App extends React.Component {

    state={
        estacion:'',
    }


    changeEstacion =(est)=>
    {
        this.setState({estacion:est})
    }



    render(){

    const data={
        title:"Pagina de prueba",
        subtitle:"Para probar cambiar el fondo dependiendo de la estacion del año",
        author:{ 
            firstName: 'Lucia',
            lastName: 'Sepulveda'
        },
        date:new Date()
    }

    const {estacion}=this.state

    return(
        <div className="app">
            <Header data={data}/>
            <p>Hola</p>
        </div>
    )

    }

}

*/




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


class App extends React.Component {
    state = {
        estacion:"",
    }

    render()
    {
        const data={
            title:"Pagina web de prueba",
            subtitle:"Es para probar el cambio en el color del fondo",
            author: {firstName:"Lucia", lastName:"Sepulveda"},
        }

        const date= new Date()

        return(
            <div className="App">
                <Header data={data} date={date}/>
                <p>Hola</p>
            </div>
        )
    }
}


const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)





