/** @jsx jsx */
/** @jsxImportSource hono/jsx */

import { FC } from "hono/jsx";
import { Layout } from "./layout";
import { Distro } from "./components/Distro";
import { SelectDistro } from "../models";

interface Props {
  distroOne: SelectDistro,
  distroTwo: SelectDistro,
}

export const Pick: FC<Props> = (props: Props) => {
  return <Layout>
    <div className="box-border lg:pb-10 w-full h-full flex flex-col items-center justify-center gap-10" >
      <h1 className="text-xl lg:text-2xl" >Shill</h1>
      <div className="box-border px-10 flex flex-col lg:flex-row gap-10 w-full justify-center" >
        <Distro link={`/pick/${props.distroOne.id}/${props.distroTwo.id}`} distro={props.distroOne} />
        <Distro link={`/pick/${props.distroTwo.id}/${props.distroOne.id}`} distro={props.distroTwo} />
      </div>
    </div>
  </Layout>
}
