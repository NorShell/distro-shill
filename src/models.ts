export interface SelectDistro {
  id: number
  name: string
  photo_url: string
  upvotes: number
  downvotes: number
  score: number
  local_photo_url: string
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
