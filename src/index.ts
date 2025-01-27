import { Hono } from 'hono'
import { ui } from './routes'

const app = new Hono<{ Bindings: CloudflareBindings }>()

app.route('/', ui)

export default app
