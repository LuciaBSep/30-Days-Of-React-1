import * as React from "react"

import {Cats} from "../../api/Cats"

import styles from "./CardImage.module.scss"

interface Props {
  cats: Cats[]
}

const CardImage: React.FC<Props> = ({cats}) => {
  return (
    <div className={styles.container}>
      {cats.map((gato) => {
        if (gato.image != null && gato.image.url != null)
          return (
            <div key={gato.image.id} className={styles.card}>
              <div className={styles.marco}>
                <img className={styles.imagen} src={gato.image.url} />
              </div>
            </div>
          )
      })}
    </div>
  )
}

export default CardImage
