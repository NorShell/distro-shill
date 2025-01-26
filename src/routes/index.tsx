/** @jsx jsx */
/** @jsxImportSource hono/jsx */

import { Hono } from "hono";
import { FC } from "hono/jsx";

export const books = new Hono<{ Bindings: CloudflareBindings }>()

const Layout: FC = (props) => {
  return <html>
    <body>{props.children}</body>
  </html>
}

const Top: FC<{ books: string[] }> = (props: {
  books: string[]
}) => {
  return (
    <Layout>
      <h1>Hello Hono!</h1>
      <ul>
        {props.books.map((book) => {
          return <li>{book}!!</li>
        })}
      </ul>
    </Layout>
  )
}

books.get('/', (c) => {
  const books = ['Wizard of Oz', 'Dune', 'Why kill me']
  return c.html(<Top books={books} ></Top>)
})
