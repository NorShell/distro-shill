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
  return <div
    id="content"
    className="box-border lg:pb-10 w-full h-full px-10 flex flex-col items-center lg:flex-row gap-5  justify-center" >
    <Distro link={`/pick/${props.distroOne.id}/${props.distroTwo.id}`} distro={props.distroOne} />
    <span className="text-zinc-700">OR</span>
    <Distro link={`/pick/${props.distroTwo.id}/${props.distroOne.id}`} distro={props.distroTwo} />
  </div>
}
