/** @jsx jsx */
/** @jsxImportSource hono/jsx */

import { Hono } from "hono";
import { Main } from "../ui";
import { LeaderBoard } from "../ui/leaderboard";
import { Pick } from "../ui/pick";
import { createRequestedDisto, decrement, getAllDistros, getRequestedDistros, getTwoDistros, increment } from "../db/queries";
import { Layout } from "../ui/layout";
import { RequestDistro } from "../ui/RequestDistro";
import { Confirmation } from "../ui/Confirmation";
import { SelectDistro, SelectRequestedDistro } from "../models";
import { ErrorComponent } from "../ui/components/ErrorComponent";
import { NotFoundComponent } from "../ui/components/NotFound";

export const ui = new Hono<{ Bindings: CloudflareBindings }>()

ui.get('/', (c) => {

  return c.html(<Main></Main>)
})

ui.get('/pick/:selectedId?/:refusedId?/:downvoteBoth?', async (c) => {

  const { selectedId, refusedId, downvoteBoth } = c.req.param()

  let results: SelectDistro[] = []

  try {
    results = await getTwoDistros(c.env.DB)
  } catch (error) {
    return c.html(<ErrorComponent message="The DB is out of space and maybe we should have read those emails" />)
  }

  const [distroOne, distroTwo] = results

  if (selectedId && refusedId && downvoteBoth) {
    try {
      await decrement(c.env.DB, selectedId)
      await decrement(c.env.DB, refusedId)
      return c.html(<Pick distroOne={distroOne} distroTwo={distroTwo} />)
    } catch (error) {
      return c.html(<ErrorComponent message="Come on man just chose one!" />)
    }
  }

  if (selectedId && refusedId) {
    try {
      await increment(c.env.DB, selectedId)
      await decrement(c.env.DB, refusedId)
      return c.html(<Pick distroOne={distroOne} distroTwo={distroTwo} />)
    } catch (error) {
      return c.html(<ErrorComponent message="Foo's ultra complex algo" />)
    }
  }

  return c.html(<Layout>
    <Pick distroOne={distroOne} distroTwo={distroTwo} />
  </Layout>
  )
})

ui.get("/leaderboard", async (c) => {

  let results: SelectDistro[] = []

  try {
    results = await getAllDistros(c.env.DB)
  } catch (error) {
    return c.html(<ErrorComponent message="The DB is out of space and maybe we should have read those emails" />)
  }

  return c.html(<LeaderBoard distros={results} />)
})

ui.get("/request-distro", async (c) => {

  let requestedDistros: SelectRequestedDistro[] = []

  try {

    const db = c.env.DB

    requestedDistros = await getRequestedDistros(db)

  } catch (error) {
    return c.html(<ErrorComponent message="The DB is out of space and maybe we should have read those emails" />)
  }

  return c.html(<RequestDistro requestedDistros={requestedDistros} />)

})

ui.post("/request-distro", async (c) => {

  const body = await c.req.parseBody()
  const name = body.name as string

  if (!name || !name.trim()) {
    return c.html(<ErrorComponent message="Why try to bypass our state of the art security with empty names" />)
  }

  const db = c.env.DB

  try {
    await createRequestedDisto(db, name)
  } catch (err) {
    return c.html(<ErrorComponent message="We just do not want to" />)
  }

  return c.html(<Confirmation name={name} />)

})

ui.notFound((c) => {
  return c.html(<NotFoundComponent />)
})
