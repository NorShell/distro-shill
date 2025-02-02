/** @jsx jsx */
/** @jsxImportSource hono/jsx */

import { Hono } from 'hono'
import { ui } from './routes'
import { NotFoundComponent } from './ui/components/NotFound'

const app = new Hono<{ Bindings: CloudflareBindings }>()

app.route('/', ui)

app.notFound((c) => {
  return c.html(<NotFoundComponent />)
})


export default app
