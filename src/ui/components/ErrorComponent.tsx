/** @jsx jsx */
/** @jsxImportSource hono/jsx */

import { FC } from "hono/jsx";
import { Layout } from "../layout";

interface Props {
  message: string
}

export const ErrorComponent: FC<Props> = ({ message }: Props) => {
  return <Layout>
    <div className="flex flex-col items-center justify-center gap-5" >
      <h1 className="text-2xl text-red-500" >Something went wrong!</h1>
      <span></span>
      <h2>And we have no idea what but maybe it has something to do with  :</h2>
      <span className="text-red-500 text-xl italic" >"{message}"</span>
      <p>But do not worry, our ( underpaid and overworked ) intern is looking into it!</p>
      <p>( if DeepSeek is not down again lol)</p>
      <span></span>
      <a href="/pick" className="border-4 border-zinc-700 border-dashed p-2 outline-none hover:border-zinc-400" >Just keep shilling</a>
    </div>
  </Layout>
}
