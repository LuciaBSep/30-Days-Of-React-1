import * as React from "react"

import api from "../api/api"
import apiGato from "../api/apiGato"
// eslint-disable-next-line prettier/prettier
import { Cat } from "../api/Cat"
// eslint-disable-next-line prettier/prettier
import { Cats } from "../api/Cats"
import Card from "../components/Card/Card"
import Countries from "../components/Countries/Countries"
import Header from "../components/Header/Header"
import Links from "../components/Links/Links"
import Data from "../components/Data/Data"

const valueTotal = (arreglo: string[]) => {
  let numero1 = 0
  let numero2 = 0
  let total = 0

  const stringToNumber = (palabra: string, inicio: number) => {
    let devolver = ""

    for (let i = inicio; i < inicio + 2; i++) {
      switch (palabra[i]) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9": {
          devolver = devolver + palabra[i]
          break
        }
        default:
          break
      }
    }

    return parseInt(devolver)
  }

  for (let i = 0; i !== arreglo.length; i++) {
    const palabra = arreglo[i]

    numero1 = stringToNumber(palabra, 0)
    if (numero1 > 9) {
      numero2 = stringToNumber(palabra, 5)
    } else {
      numero2 = stringToNumber(palabra, 4)
    }
    total = total + numero1 + numero2
  }
  total = total / (arreglo.length * 2)

  return total
}

const life_span_array = (arreglo: Cats[]) => {
  const a: string[] = []

  for (let i = 0; i < arreglo.length; i++) {
    a[i] = arreglo[i].life_span
  }

  return a
}

const weight_array = (arreglo: Cats[]) => {
  const a: string[] = []

  for (let i = 0; i < arreglo.length; i++) {
    a[i] = arreglo[i].weight.metric
  }

  return a
}

const findCountry = (arreglo: string[], pais: string) => {
  let encontre = false
  let i = 0

  while (!encontre && i < arreglo.length) {
    if (arreglo[i] === pais) {
      encontre = true
    } else i = i + 1
  }

  return encontre
}

const paises = (arreglo: Cats[]) => {
  const countries: string[] = []

  for (let i = 0; i < arreglo.length; i++) {
    if (findCountry(countries, arreglo[i].origin) === false)
      countries[countries.length] = arreglo[i].origin
    console.log(arreglo[i].origin)
  }

  return countries.length
}

export interface countries {
  name: string
  cont: number
  id: number
}

const findCountryArray = (arreglo: countries[], pais: string) => {
  let i = 0
  let encontre = false

  while (i < arreglo.length && !encontre) {
    if (arreglo[i].name === pais) {
      encontre = true
    } else {
      i = i + 1
    }
  }

  return i
}

const arrayCountries = (arreglo: Cats[]) => {
  const a: countries[] = []
  const pais: string[] = []

  for (let i = 0; i < arreglo.length; i++) {
    if (findCountry(pais, arreglo[i].origin) === false) {
      a[a.length] = {name: arreglo[i].origin, cont: 1, id: i}
      pais[pais.length] = arreglo[i].origin
    } else {
      const pos = findCountryArray(a, arreglo[i].origin)
      const contAnterior = a[pos].cont

      a[pos].id = i
      a[pos].cont = contAnterior + 1
    }
  }
  a[a.length] = {name: "All", cont: 0, id: a.length}

  return a
}

const highCountry = (arreglo: Cats[]) => {
  const a: countries[] = []
  const pais: string[] = []

  for (let i = 0; i < arreglo.length; i++) {
    if (findCountry(pais, arreglo[i].origin) === false) {
      a[a.length] = {name: arreglo[i].origin, cont: 1, id: 0}
      pais[pais.length] = arreglo[i].origin
    } else {
      const contAnterior = a[findCountryArray(a, arreglo[i].origin)].cont

      a[findCountryArray(a, arreglo[i].origin)].cont = contAnterior + 1
    }
  }
  let primero = a[0]

  for (let j = 1; j < a.length; j++) {
    if (a[j].cont > primero.cont) primero = a[j]
  }

  return primero.name
}

enum Status {
  Init = "init",
  Pending = "pending",
  Ready = "Ready",
}

const App: React.FC = () => {
  const [cats, setCats] = React.useState<Cats[]>([])
  const [status, setStatus] = React.useState<Status>(Status.Init)
  const [gato, setGato] = React.useState<Cat>({
    0: {
      id: "",
      url: "",
      breeds: {
        0: {
          name: "",
          weight: {
            imperial: "",
            metric: "",
          },
          description: "",
          life_span: "",
          temperament: "",
          origin: "",
        },
      },
    },
  })
  const [country, setCountry] = React.useState<string>("All")

  React.useEffect(() => {
    if (status !== Status.Init) return
    setStatus(Status.Pending)
    api.list().then((c) => {
      setCats(c)
      console.log(c[0].name)
    })
    apiGato.unGato().then((d) => {
      setGato(d)
      setStatus(Status.Ready)
    })
  }, [status, cats])

  const selectCountry = (c: string) => {
    console.log("Toco un boton ")
    console.log(c)
    setCountry(c)
  }

  if (status === Status.Ready) {
    console.log(cats[1].name)
    console.log("Valor total LS: " + valueTotal(life_span_array(cats)))
    console.log("Valor total W: " + valueTotal(weight_array(cats)))
    console.log("El total de paises es: " + paises(cats))
    console.log(highCountry(cats))
    console.log(gato?.[0].id)
    console.log(cats[0])
    console.log("Nombre" + gato[0].breeds[0].name)
    console.log(gato[0].breeds)

    return (
      <div>
        <Header title="Cats">
          <Links />
          <Data
            breeds={cats.length}
            life_span={parseFloat(valueTotal(life_span_array(cats)).toFixed(2))}
            weight={parseFloat(valueTotal(weight_array(cats)).toFixed(2))}
          />
        </Header>
        <Countries arreglo={arrayCountries(cats)} select={selectCountry} />
        <Card cat={gato} cats={cats} country={country} />
      </div>
    )
  }

  return (
    <div>
      <h1>Loading..</h1>
    </div>
  )
}

export default App
