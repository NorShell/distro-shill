/** @jsx jsx */
/** @jsxImportSource hono/jsx */

import { FC } from "hono/jsx";
import { Layout } from "./layout";

export const Main: FC<{ books: string[] }> = (props: {
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
      <a href="/pick">Start</a>
    </Layout>
  )
}
