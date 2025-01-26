import { Hono } from 'hono'
import { books } from './routes'

const app = new Hono<{ Bindings: CloudflareBindings }>()

app.get('/', (c) => {
  return c.text("Hello")
})

app.get("/hello", (c) => {
  return c.text("Hello from hello from index")
})

app.route('/book', books)

export default app
