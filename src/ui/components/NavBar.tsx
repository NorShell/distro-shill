/** @jsx jsx */
/** @jsxImportSource hono/jsx */

import { FC } from "hono/jsx";

interface Props {
}

export const Navbar: FC<Props> = (props: Props) => {
  return <nav className="fixed box-border w-full p-10 border-b border-dashed border-zinc-700 flex items-center justify-center gap-10" >
    <a href="/">
      <img
        src="../../../public/MainNorNoBg.PNG"
        alt="Nor"
        className="w-10 h-10"
      />
    </a>
    <a href="/">Home</a>
    <a href="/leaderBoard">Leader Board</a>
  </nav>
}
