/** @jsx jsx */
/** @jsxImportSource hono/jsx */

import { FC } from "hono/jsx";
import { Distro } from "./components/Distro";
import { SelectDistro } from "../models";

interface Props {
  distroOne: SelectDistro,
  distroTwo: SelectDistro,
  totalNumbers: number,
  ratedNumbers: number,
  screwBothNumber: number
}

export const Pick: FC<Props> = (props: Props) => {
  return (
    <div
      id="distros"
      className="w-full flex flex-col items-center justify-center"
    >
      <span className="text-zinc-200 my-10 ">Rated: {props.ratedNumbers}/{props.totalNumbers}</span>
      <div
        className="box-border  lg:pb-10 w-full h-full px-10 flex flex-col items-center lg:flex-row p-2 lg:gap-5 justify-center"
      >
        <Distro link={`/pick/${props.distroOne.id}/${props.distroTwo.id}`} distro={props.distroOne} />
        <span className="text-zinc-700 [htmx-indicator]:hidden">OR</span>
        <Distro link={`/pick/${props.distroTwo.id}/${props.distroOne.id}`} distro={props.distroTwo} />
      </div>
      <button
        disabled={props.screwBothNumber === 0}
        hx-get={`/pick/${props.distroOne.id}/${props.distroTwo.id}/yes`}
        hx-target="#distros"
        hx-swap="outerHTML"
        className="text-zinc-200 my-10 hover:underline disabled:text-zinc-700 " >Screw them both? ({props.screwBothNumber}/3) </button>
    </div>
  );
}
