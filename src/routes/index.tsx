/** @jsx jsx */
/** @jsxImportSource hono/jsx */

import { Hono } from "hono";
import { Main } from "../ui";
import { LeaderBoard } from "../ui/leaderboard";
import { Pick } from "../ui/pick";

export const ui = new Hono<{ Bindings: CloudflareBindings }>()

ui.get('/', (c) => {
  const books = ['Wizard of Oz', 'Dune', 'Why kill me']
  return c.html(<Main books={books} ></Main>)
})

ui.get('/pick', (c) => {
  return c.html(<Pick />)
})

ui.get("/leaderboard", (c) => {
  return c.html(<LeaderBoard />)
})
