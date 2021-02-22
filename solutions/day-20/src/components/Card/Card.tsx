import * as React from "react"
import {Cat} from "../../api/Cat"
import {Cats} from "../../api/Cats"
import styles from "./Card.module.scss"

interface Props {
  cats: Cats[]
  cat: Cat
  country: string
}

const Card: React.FC<Props> = ({cats, cat, country}) => {
  if (country === "All") {
    return (
      <div className={styles.container}>
        {cats.map((gato) => {
          if (gato.image != null && gato.image.url != null)
            return (
              <div key={gato.image.id}>
                <div className={styles.card}>
                  <div className={styles.marco}>
                    <img className={styles.imagen} src={gato.image.url} />
                  </div>
                  <div>
                    <h2>{gato.name}</h2>
                    <p>
                      <b>Origin: </b>
                      {gato.origin}
                      <br />
                      <b>Life Span:</b>
                      {gato.life_span}
                      <br />
                      <b>Description: </b>
                      {gato.description}
                      <br />
                      <b>Temperament: </b>
                      {gato.temperament}
                    </p>
                  </div>
                </div>
              </div>
            )
        })}
      </div>
    )
  } else {
    return (
      <div className={styles.container}>
        {cats
          .filter((gat) => gat.origin === country)
          .map((gato) => {
            if (gato.image != null && gato.image.url != null)
              return (
                <div key={gato.image.id}>
                  <div className={styles.card}>
                    <div className={styles.marco}>
                      <img className={styles.imagen} src={gato.image.url} />
                    </div>
                    <div>
                      <h2>{gato.name}</h2>
                      <p>
                        <b>Origin: </b>
                        {gato.origin}
                        <br />
                        <b>Life Span:</b>
                        {gato.life_span}
                        <br />
                        <b>Description: </b>
                        {gato.description}
                        <br />
                        <b>Temperament: </b>
                        {gato.temperament}
                      </p>
                    </div>
                  </div>
                </div>
              )
          })}
      </div>
    )
  }
}

export default Card
