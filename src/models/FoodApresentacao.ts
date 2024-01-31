export class FoodApresentacao {
  id: number
  title: string
  description: string
  order: string
  image: string
  to: string
  tittleButton: string

  constructor(
    id: number,
    title: string,
    description: string,
    order: string,
    image: string,
    to: string,
    tittleButton: string
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.order = order
    this.image = image
    this.to = to
    this.tittleButton = tittleButton
  }
}

export default FoodApresentacao
