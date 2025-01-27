/** @jsx jsx */
/** @jsxImportSource hono/jsx */

import { FC } from "hono/jsx";
import { SelectDistro } from "../../models";

interface Props {
  distro: SelectDistro
  link: string
}

export const Distro: FC<Props> = (props: Props) => {
  return <a
    href={props.link}
    className="text-center p-5 lg:p-10 text-2xl lg:text-5xl border-4 border-zinc-700 border-dashed flex flex-col items-center justify-center gap-5 lg:gap-10 "
  >
    <img
      className="w-[150px] h-[150px] lg:w-[400px] lg:h-[400px]"
      src={props.distro.photo_url} />
    <span>{props.distro.name}</span>
  </a>
}
