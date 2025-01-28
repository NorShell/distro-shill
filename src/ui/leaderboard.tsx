/** @jsx jsx */
/** @jsxImportSource hono/jsx */

import { FC } from "hono/jsx";
import { Layout } from "./layout";
import { SelectDistro } from "../models";

interface Props {
  distros: SelectDistro[]
}

export const LeaderBoard: FC<Props> = (props: Props) => {
  return <Layout>
    <div className="w-full flex flex-col items-start justify-center mb-5 box-border px-10" >
      <h1 className="box-border text-3xl py-5 self-center" >Leader Board</h1>
      <p className="self-center mb-20 text-zinc-700">Every time someone selects between two distros, the chosen distro recieves an update and the other one recieves a downvote. Upvotes - downvotes = total score. </p>
      <span className="box-border gap-5 w-full grid grid-cols-3 lg:grid-cols-5 text-sm lg:text-md p-2 text-zinc-700">
        <span>Position.</span>
        <span>Name</span>
        <span className="hidden lg:inline text-center" >Upvotes</span>
        <span className="hidden lg:inline text-center" >Downvotes</span>
        <span className="text-center" >Overall Score</span>
      </span>
      {props.distros.map((distro, index) => {
        return <span className="box-border gap-5 w-full grid grid-cols-3 lg:grid-cols-5 text-sm lg:text-md p-2">
          <span>{index + 1}.</span>
          <span>{distro.name}</span>
          <span className="hidden lg:inline text-green-200 text-center" >{distro.upvotes}</span>
          <span className="hidden lg:inline  text-red-200 text-center">{distro.downvotes}</span>
          <span className="text-center">{distro.score}</span>
        </span>
      })}
    </div>
  </Layout>
}
