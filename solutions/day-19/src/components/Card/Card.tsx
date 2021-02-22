import * as React from "react"
import {Cat} from "../../api/Cat"
import {Cats} from "../../api/Cats"
import styles from "./Card.module.scss"

interface Props {
  cats: Cats[]
  cat: Cat
}

const Card: React.FC<Props> = ({cats, cat}) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.marco}>
          <img className={styles.imagen} src={cat[0].url} />
        </div>
        <div>
          <h2>{cat[0].breeds[0].name}</h2>
          <p>
            <b>Origin: </b>
            {cat[0].breeds[0].origin}
            <br />
            <b>Life Span:</b>
            {cat[0].breeds[0].life_span}
            <br />
            <b>Description: </b>
            {cat[0].breeds[0].description}
            <br />
            <b>Temperament: </b>
            {cat[0].breeds[0].temperament}
          </p>
        </div>
      </div>
      {cats
        .filter((gat) => gat.name !== "Abyssinian")
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

export default Card
