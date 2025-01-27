/** @jsx jsx */
/** @jsxImportSource hono/jsx */

import { FC } from "hono/jsx";

interface Props {
}

export const Footer: FC<Props> = (props: Props) => {
  return <nav className="box-border w-full p-5 border-t-4 border-dashed border-zinc-700 flex items-center justify-center gap-10" >
    <span className="text-zinc-500 text-xs lg:text-sm " >© 2025 Nor. All rights reserved.</span>
  </nav>
}
