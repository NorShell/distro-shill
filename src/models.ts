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
// id INTEGER PRIMARY KEY AUTOINCREMENT,
// name TEXT NOT NULL,
// photo_url TEXT NOT NULL,
// upvotes INTEGER DEFAULT 0,
// downvotes INTEGER DEFAULT 0,
// score INTEGER DEFAULT 0
