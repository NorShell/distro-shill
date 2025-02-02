/** @jsx jsx */
/** @jsxImportSource hono/jsx */

import { FC } from "hono/jsx";
import { Layout } from "../layout";

interface Props {
}

export const NotFoundComponent: FC<Props> = ({ }: Props) => {
  return <Layout>
    <div className="flex flex-col items-center justify-center gap-5" >
      <h1 className="text-2xl text-red-500" >Where are you going ???</h1>
      <span></span>
      <h2>This app has like three pages: <a className="underline" href="/pick">shilling</a>, <a className="underline" href="/leaderboard">leaderboard</a> and <a className="underline" href="/request-distro">request a new distro</a>. </h2>
      <h2>Make up your mind already.</h2>
      <span></span>
      <a href="/pick" className="border-4 border-zinc-700 border-dashed p-2 outline-none hover:border-zinc-400" >Go back shilling</a>
    </div>
  </Layout>
}
