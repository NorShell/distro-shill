/** @jsx jsx */
/** @jsxImportSource hono/jsx */

import { FC } from "hono/jsx";
import { Layout } from "./layout";
import { Distro } from "./components/Distro";

interface Props {
  choiceOne: string,
  choiceTwo: string
}

export const Pick: FC<Props> = (props: Props) => {
  return <Layout>
    <div className="box-border w-full h-full flex flex-col items-center justify-center gap-10" >
      <h1 className="text-xl" >Shill</h1>
      <div className="flex gap-10 w-full justify-center" >
        <Distro choice={props.choiceOne} />
        <Distro choice={props.choiceTwo} />
      </div>
    </div>
  </Layout>
}
