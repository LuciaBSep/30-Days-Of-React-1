import {Country} from "./Country"

export default {
  list: (): Promise<Country[]> =>
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((res) => res),
}
