/** @jsx jsx */
/** @jsxImportSource hono/jsx */

import { Hono } from "hono";
import { Main } from "../ui";
import { LeaderBoard } from "../ui/leaderboard";
import { Pick } from "../ui/pick";

const distros = [
  "Arch", "Tails", "PopOs", "Debian", "CentOS", "NixOS", "Alpine", "Fedora", "RedHat"
]

function getRandomDistro() {

  const distroNumber = distros.length

  const chosenDistro = distros[Math.floor(Math.random() * distroNumber)]

  return chosenDistro

}

export const ui = new Hono<{ Bindings: CloudflareBindings }>()

ui.get('/', (c) => {

  const books = ['Wizard of Oz', 'Dune', 'Why kill me']
  return c.html(<Main books={books} ></Main>)
})

ui.get('/pick/:selectedId?/:refusedId?', (c) => {

  const { selectedId, refusedId } = c.req.param()

  if (selectedId && refusedId) {
    console.log({
      selectedId,
      refusedId
    })
  }

  const choiceOne = getRandomDistro()
  const choiceTwo = getRandomDistro()

  return c.html(<Pick choiceOne={choiceOne} choiceTwo={choiceTwo} />)
})

ui.get("/leaderboard", (c) => {
  return c.html(<LeaderBoard />)
})
