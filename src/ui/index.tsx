/** @jsx jsx */
/** @jsxImportSource hono/jsx */

import { FC } from "hono/jsx";
import { Layout } from "./layout";

export const Main: FC = () => {
  return (
    <Layout>
      <div
        id="content"
        className="box-border px-5 flex flex-col items-center justify-center gap-10" >
        <h1 className="text-center text-xl" >Shill your favourite Linux distribution</h1>
        <p className="text-center text-zinc-400" >You get two distros, choose your favourite from the two. Check the <a href="/leaderboard" >leaderboard</a> to see the stats. </p>
        <a className="
          text-2xl p-5 border-dashed border-4 border-zinc-700 
          hover:border-zinc-100 animate-pulse
          transform transition duration-300
          "
          href="/pick"
        >Shill</a>
      </div>
    </Layout>
  )
}
