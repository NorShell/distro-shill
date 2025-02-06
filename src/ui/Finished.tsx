/** @jsx jsx */
/** @jsxImportSource hono/jsx */

import { FC } from "hono/jsx";
import { Layout } from "./layout";

interface Props {
}


export const Finished: FC<Props> = ({ }: Props) => {
  return <div className="w-full flex flex-col items-center justify-center gap-5 p-10">
    <p className="text-zinc-200">You rated all the distros. Go check the leaderboard.</p>
    <a href="/" className="border-4 border-zinc-700 border-dashed p-2 outline-none hover:border-zinc-400">Back to Home</a>
  </div>
}
