export interface Cat {
  0: {
    id: string
    url: string
    breeds: {
      0: {
        name: string
        weight: {
          imperial: string
          metric: string
        }
        description: string
        life_span: string
        temperament: string
        origin: string
      }
    }
  }
}
