/** @jsx jsx */
/** @jsxImportSource hono/jsx */

import { Hono } from "hono";
import { Main } from "../ui";
import { LeaderBoard } from "../ui/leaderboard";
import { Pick } from "../ui/pick";
import { decrement, getAllDistros, getTwoDistros, increment } from "../db/queries";
import { Layout } from "../ui/layout";

export const ui = new Hono<{ Bindings: CloudflareBindings }>()

ui.get('/', (c) => {

  return c.html(<Main></Main>)
})

ui.get('/pick/:selectedId?/:refusedId?', async (c) => {

  const { selectedId, refusedId } = c.req.param()

  const results = await getTwoDistros(c.env.DB)

  const [distroOne, distroTwo] = results

  if (selectedId && refusedId) {
    await increment(c.env.DB, selectedId)
    await decrement(c.env.DB, refusedId)

    return c.html(<Pick distroOne={distroOne} distroTwo={distroTwo} />)

  }

  return c.html(<Layout>
    <Pick distroOne={distroOne} distroTwo={distroTwo} />
  </Layout>
  )
})

ui.get("/leaderboard", async (c) => {

  const results = await getAllDistros(c.env.DB)

  return c.html(<LeaderBoard distros={results} />)
})
