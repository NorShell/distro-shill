import { Context } from "hono";
import { deleteCookie, getCookie, setCookie } from "hono/cookie";
import { BlankInput } from "hono/types";

export interface Session {
  sessionId: string
  ratedDistros: number[]
  createdAt: number
}

export async function getSession(c: Context<{ Bindings: CloudflareBindings }, "/", BlankInput>) {

  const sessionCookey = getCookie(c, "sessionId")
  let session: Session | undefined

  if (sessionCookey) {

    const sessionData = await c.env.DistroKV.get(sessionCookey)
    if (sessionData) {
      try {
        session = JSON.parse(sessionData)
      } catch (error) {
        console.error("Error parsing session", error)
      }
    }
  }

  if (!session) {


    const sessionId = crypto.randomUUID()

    session = {
      sessionId,
      ratedDistros: [],
      createdAt: Date.now()
    }

    const sessionString = JSON.stringify(session)

    await c.env.DistroKV.put(sessionId, sessionString, {
      expirationTtl: 3600
    })

    setCookie(c, "sessionId", sessionId, {
      httpOnly: true
    })

  }

  return session

}

export async function updateSession(c: Context<{ Bindings: CloudflareBindings }, "/", BlankInput>, session: Session) {

  const sessionString = JSON.stringify(session)

  await c.env.DistroKV.put(session.sessionId, sessionString, {
    expirationTtl: 3600
  })

}

export async function deleteSession(c: Context<{ Bindings: CloudflareBindings }, "/", BlankInput>, session: Session) {

  await c.env.DistroKV.delete(session.sessionId)

  deleteCookie(c, "sessionId")

}
