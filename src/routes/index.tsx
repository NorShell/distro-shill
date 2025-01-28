/** @jsx jsx */
/** @jsxImportSource hono/jsx */

import { Hono } from "hono";
import { Main } from "../ui";
import { LeaderBoard } from "../ui/leaderboard";
import { Pick } from "../ui/pick";
import { SelectDistro } from "../models";
import { decrement, getAllDistros, getTwoRandomDistros, increment } from "../db/queries";

export const ui = new Hono<{ Bindings: CloudflareBindings }>()

ui.get('/', (c) => {

  return c.html(<Main></Main>)
})

ui.get('/pick/:selectedId?/:refusedId?', async (c) => {

  const { selectedId, refusedId } = c.req.param()

  if (selectedId && refusedId) {
    await increment(c.env.DB, selectedId)
    await decrement(c.env.DB, refusedId)
  }

  const url = await c.env.BUCKET.get("arch.png")

  const results = await getTwoRandomDistros(c.env.DB)

  const [distroOne, distroTwo] = results

  return c.html(<Pick distroOne={distroOne} distroTwo={distroTwo} />)
})

ui.get("/leaderboard", async (c) => {

  const results = await getAllDistros(c.env.DB)

  return c.html(<LeaderBoard distros={results} />)
})
