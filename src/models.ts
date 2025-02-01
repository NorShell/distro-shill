export interface SelectDistro {
  id: number
  name: string
  photo_url: string
  upvotes: number
  downvotes: number
  score: number
}

export interface InsertDistro {
  id: number
  name: string
  photo_url: string
  upvotes: number
  downvotes: number
  score: number
}

export interface SelectRequestedDistro {
  id: number
  name: string
  status: string
}
