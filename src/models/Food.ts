class Food {
  title: string
  score: string
  description: string
  infos: string[]
  image: string
  id: number
  more: string
  to: string
  tittleButton: string

  constructor(
    id: number,
    title: string,
    score: string,
    description: string,
    more: string,
    infos: string[],
    image: string,
    to: string,
    tittleButton: string
  ) {
    this.id = id
    this.title = title
    this.score = score
    this.description = description
    this.more = more
    this.infos = infos
    this.image = image
    this.to = to
    this.tittleButton = tittleButton
  }
}

export default Food
