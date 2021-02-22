import * as React from "react"

import {countries} from "../../App/App"

import styles from "./Countries.module.scss"

import Button from "../../ui/controls/Button/Button"

interface Props {
  arreglo: countries[]
  select: (c: string) => void
}

const Countries: React.FC<Props> = ({arreglo, select}) => {
  return (
    <div className={styles.container}>
      <ul>
        {arreglo.map((country) => {
          return (
            <li key={country.id}>
              <Button id={country.name} onClick={() => select(country.name)}>
                {country.name} ({country.cont})
              </Button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Countries
