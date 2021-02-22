import * as React from 'react'
import {Cats} from '../api/Cats'
import api from '../api/api'
import axios from 'axios'
import {Component} from 'react'
import ReactDOM from 'react-dom'

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

  const valorTotal = (arreglo:string[]) => {
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
      let palabra=arreglo[i]
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

  const life_span_arreglo = (arreglo:Cats[]) =>{
    let a:string[]=[]
    for (let i=0;i<arreglo.length;i++)
    {
      a[i]=arreglo[i].life_span
    }
    return a
  }

  const weight_arreglo = (arreglo:Cats[]) =>{
    let a:string[]=[]
    for (let i=0;i<arreglo.length;i++)
    {
      a[i]=arreglo[i].weight.metric
    }
    return a
  }




enum Status{
  Init='init',
  Pending='pending',
  Ready='Ready'
}

const App: React.FC = () =>
{
  const [cats, setCats] = React.useState<Cats[]>([])
  const [status,setStatus] = React.useState<Status>(Status.Init)


  const gato:Cats = cats[0]

  React.useEffect(()=>{
    if (status !== Status.Init)
      return
    setStatus(Status.Pending)
    api.list().then((c) => {
      setCats(c)
      console.log(c[0].name)
      setStatus(Status.Ready)
    })
  },[status,cats])

  React.useEffect( () =>
  {
    if (status === Status.Ready)
    {
        console.log(cats[1].name)
        console.log(weight(cats))
        console.log(life_span(cats))
        console.log("Valor total LS: "+valorTotal(life_span_arreglo(cats)))
        console.log("Valor total W: "+valorTotal(weight_arreglo(cats)))

    }
  })


    return(
      <div>
        <h1>Hola</h1>
      </div>
    )
  }

export default App
