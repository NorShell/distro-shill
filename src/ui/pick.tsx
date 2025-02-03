/** @jsx jsx */
/** @jsxImportSource hono/jsx */

import { FC, Fragment } from "hono/jsx";
import { Distro } from "./components/Distro";
import { SelectDistro } from "../models";

interface Props {
  distroOne: SelectDistro,
  distroTwo: SelectDistro,
}

export const Pick: FC<Props> = (props: Props) => {
  return (
    <div
      id="distros"
      className="w-full flex flex-col items-center justify-center"
    >
      <div
        className="box-border pb-5 lg:pb-10 w-full h-full px-10 flex flex-col items-center lg:flex-row p-2 lg:gap-5 justify-center"
      >
        <Distro link={`/pick/${props.distroOne.id}/${props.distroTwo.id}`} distro={props.distroOne} />
        <span className="text-zinc-700 [htmx-indicator]:hidden">OR</span>
        <Distro link={`/pick/${props.distroTwo.id}/${props.distroOne.id}`} distro={props.distroTwo} />
      </div>
      <a
        hx-get={`/pick/${props.distroOne.id}/${props.distroTwo.id}/yes`}
        hx-target="#distros"
        hx-swap="outerHTML"
        className="text-zinc-200 hover:underline " >Screw them both?</a>
    </div>
  );
}
