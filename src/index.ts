import { Hono } from 'hono'
import { ui } from './routes'

const app = new Hono<{ Bindings: CloudflareBindings }>()

app.get('/', (c) => {
  return c.text("Hello")
})

app.route('/app', ui)

export default app
