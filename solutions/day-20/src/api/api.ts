import {Cats} from "./Cats"

export default {
  list: (): Promise<Cats[]> =>
    fetch("https://api.thecatapi.com/v1/breeds")
      .then((res) => res.json())
      .then((res) => res),
}
