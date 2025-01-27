/** @jsx jsx */
/** @jsxImportSource hono/jsx */

import { FC } from "hono/jsx";

interface Props {
  choice: string,
}

export const Distro: FC<Props> = (props: Props) => {
  return <a
    href="/pick"
    className="w-1/4 text-center p-10 text-2xl border border-zinc-700 border-dashed rounded-lg "
  >
    <img
      className="w-[400px] h-[400px]"
      src="https://banner2.cleanpng.com/20180810/wo/8743498d46f78c192fc2affa5b865c99.webp" />
    <span>{props.choice}</span>
  </a>
}
