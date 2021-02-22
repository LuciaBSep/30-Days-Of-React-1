export interface Cats {
  name: string
  temperament: string
  origin: string
  description: string
  image: {
    id: string
    width: number
    height: number
    url: string
  }
  weight: {
    imperial: string
    metric: string
  }
  life_span: string
  url: string
}
