import * as React from 'react'
import {Cats} from './api/Cats'
import api from './api/api'
import axios from 'axios'
import {Component} from 'react'
import ReactDOM from 'react-dom'
/*
const App: React.FC = () =>
{
  const [cats, setCats] = React.useState<Cats[]>()

/*
    api.list().then((cats) => {
      setCats(cats)
      console.log(cats[0].name)
    })

    const axios = require('axios')
/* esto funciona
axios.get('https://api.thecatapi.com/v1/breeds').then((response: { data: any }) => {
      setCats(response.data)
      

    async function makeRequest(){

      let res = await axios.get('https://api.thecatapi.com/v1/breeds')
      
      let data= res.data
      setCats(data)

      console.log(cats)
      return data
  }

 makeRequest()

  return(
    <div>
    </div>
  )
}


*/


 const weight = (arreglo:Cats[]) =>{
    let numero1:number=0
    let numero2:number=0
    let total:number=0

    const numero = (palabra:string, inicio:number) => 
    {
      let devolver:string=''
      for (let i=inicio; i<inicio+2;i++){
      switch(palabra[i])
      {
        case '0': case '1': case '2': case '3': case '4':
        case '5': case '6': case '7': case '8': case '9':
          {
            devolver=devolver+palabra[i]
            break
          }
        default:
          break
      }
      }
      return parseInt(devolver)
    }

    for (let i=0;i !== arreglo.length;i++)
    {
      let palabra=arreglo[i].weight.metric
      numero1=numero(palabra,0)
      if (numero1>9)
      {
        numero2=numero(palabra,5)
      }
      else
      {
        numero2=numero(palabra,4)
      }
      total=total+numero1+numero2
    }
    total=total/(arreglo.length*2)
    return total
  }



  const life_span = (arreglo:Cats[]) => {
    let numero1:number=0
    let numero2:number=0
    let total:number=0

    const numero = (palabra:string, inicio:number) => 
    {
      let devolver:string=''
      for (let i=inicio; i<inicio+2;i++){
      switch(palabra[i])
      {
        case '0': case '1': case '2': case '3': case '4':
        case '5': case '6': case '7': case '8': case '9':
          {
            devolver=devolver+palabra[i]
            break
          }
        default:
          break
      }
      }
      return parseInt(devolver)
    }

    for (let i=0;i !== arreglo.length;i++)
    {
      let palabra=arreglo[i].life_span
      numero1=numero(palabra,0)
      if (numero1>9)
      {
        numero2=numero(palabra,5)
      }
      else
      {
        numero2=numero(palabra,4)
      }
      total=total+numero1+numero2
    }
    total=total/(arreglo.length*2)
    return total
  }



class App extends React.Component{
  state={
    data:[],
  }

  componentDidMount()
  {
    axios
    .get<Cats[]>('https://api.thecatapi.com/v1/breeds')
    .then((response) => 
    {
      this.setState({data: response.data})
      console.log(this.state.data)
      console.log(this.state.data[0])
      let arreglo:Cats[]
      arreglo=this.state.data
      console.log(arreglo[0].name)
      console.log(parseInt("10 - 15"))
      let palabra:string='9 - 15'
      console.log(palabra[2])
      console.log(arreglo[0].weight.metric)
      console.log(weight(arreglo))
      console.log(life_span(arreglo))
    })
    .catch((error) =>{
      console.log(error)
    })
  }
    





  render()
  {
    return(
    <div>
      <h1>hola</h1>
    </div>
    )
  }

}

export default App
