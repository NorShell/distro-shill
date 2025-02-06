/** @jsx jsx */
/** @jsxImportSource hono/jsx */

import { Hono } from "hono";
import { Main } from "../ui";
import { LeaderBoard } from "../ui/leaderboard";
import { Pick } from "../ui/pick";
import { createRequestedDisto, decrement, getAllDistros, getRequestedDistros, getTwoDistros, getTwoRandomDistros, increment } from "../db/queries";
import { Layout } from "../ui/layout";
import { RequestDistro } from "../ui/RequestDistro";
import { Confirmation } from "../ui/Confirmation";
import { SelectDistro, SelectRequestedDistro } from "../models";
import { ErrorComponent } from "../ui/components/ErrorComponent";
import { NotFoundComponent } from "../ui/components/NotFound";
import { Session, deleteSession, getSession, updateSession } from "../utils/session";

export const ui = new Hono<{ Bindings: CloudflareBindings }>()

// home route
ui.get('/', (c) => {

  return c.html(<Main></Main>)
})

// pick the distros route
ui.get('/pick/:selectedId?/:refusedId?/:downvoteBoth?', async (c) => {


  const { selectedId, refusedId, downvoteBoth } = c.req.param()

  let results: SelectDistro[] = []

  let session: Session | null = null

  try {

    session = await getSession(c)

    if (!session) {
      throw new Error()
    }

  } catch (error) {

    console.error("No session")
    return c.html(<ErrorComponent message="There is something wrong with the sessions." />)

  }

  try {

    results = await getAllDistros(c.env.DB)

  } catch (error) {

    console.error(error)

    return c.html(<ErrorComponent message="The DB is out of space and maybe we should have read those emails" />)
  }

  const ratedDistros = session.ratedDistros

  console.log(ratedDistros)

  let remainingDistros: SelectDistro[] = []

  for (const d of results) {

    if (!ratedDistros.includes(d.id)) {
      remainingDistros.push(d)
    }

  }

  const [distroOne, distroTwo] = remainingDistros

  if (selectedId && refusedId && downvoteBoth) {


    try {
      await decrement(c.env.DB, selectedId)
      await decrement(c.env.DB, refusedId)

      session.ratedDistros.push(parseInt(selectedId))
      session.ratedDistros.push(parseInt(refusedId))

      await updateSession(c, session)

      remainingDistros = remainingDistros.filter(d => !session.ratedDistros.includes(d.id))

      if (remainingDistros.length === 0) {
        await deleteSession(c, session)
        return c.text("Finished")
      }

      const [distroOne, distroTwo] = remainingDistros


      return c.html(<Pick totalNumbers={results.length} ratedNumbers={results.length - remainingDistros.length} distroOne={distroOne} distroTwo={distroTwo} />)

    } catch (error) {

      console.error(error)
      return c.html(<ErrorComponent message="Come on man just chose one!" />)
    }
  }

  if (selectedId && refusedId) {

    try {

      await increment(c.env.DB, selectedId)
      await decrement(c.env.DB, refusedId)

      session.ratedDistros.push(parseInt(selectedId))
      session.ratedDistros.push(parseInt(refusedId))

      await updateSession(c, session)

      remainingDistros = remainingDistros.filter(d => !session.ratedDistros.includes(d.id))

      if (remainingDistros.length === 0) {
        await deleteSession(c, session)
        return c.text("Finished")
      }

      const [distroOne, distroTwo] = remainingDistros

      return c.html(<Pick totalNumbers={results.length} ratedNumbers={results.length - remainingDistros.length} distroOne={distroOne} distroTwo={distroTwo} />)

    } catch (error) {

      console.error(error)
      return c.html(<ErrorComponent message="Foo's ultra complex algo" />)

    }
  }

  return c.html(<Layout>
    <Pick totalNumbers={results.length} ratedNumbers={results.length - remainingDistros.length} distroOne={distroOne} distroTwo={distroTwo} />
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

