import {Cat} from "./Cat"

export default {
  unGato: (): Promise<Cat> =>
    fetch("https://api.thecatapi.com/v1/images/search?breed_id=abys")
      .then((res) => res.json())
      .then((res) => res),
}
