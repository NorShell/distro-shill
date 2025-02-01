/** @jsx jsx */
/** @jsxImportSource hono/jsx */

import { FC } from "hono/jsx";
import { Layout } from "./layout";

interface Props {
  name: string
}


export const Confirmation: FC<Props> = ({ name }: Props) => {
  return <Layout>
    <div className="w-full flex flex-col items-center justify-center gap-5 p-10">
      <p className="text-zinc-700">Your request for <span className="text-bold text-zinc-50" >{name}</span> has been submitted.</p>
      <a href="/" className="border-4 border-zinc-700 border-dashed p-2 outline-none hover:border-zinc-400">Back to Home</a>
    </div>  </Layout>
}
